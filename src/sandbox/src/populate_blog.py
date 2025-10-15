import csv
import json
import urllib.request
import urllib.parse
import ssl
import os

# --- Configuration ---
API_URL = "https://restapi.fr/api/mkr-articles" # Remplacez par l'URL de l'API cible
CSV_FILE_NAME = os.path.dirname(__file__) + "/articles_blog.csv"

# Crée un contexte SSL non vérifié pour les tests.
# À utiliser AVEC PRUDENCE et uniquement si l'API est en HTTPS mais utilise un certificat non reconnu localement.
# Pour la production, il est recommandé de résoudre le problème de certificat.
# Si vous êtes sûr de l'environnement, vous pouvez supprimer les lignes ci-dessous si elles ne sont pas nécessaires.
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE
# --- Fin Configuration ---

def envoyer_article_api(article_data):
    """
    Envoie un seul article au format JSON à l'API via une requête POST.
    """
    print(f"-> Envoi de l'article : '{article_data['title'][:40]}...'")

    try:
        # 1. Préparation des données
        # Convertit le dictionnaire Python en chaîne JSON
        json_data = json.dumps(article_data)
        # Encode la chaîne JSON en bytes (nécessaire pour l'envoi POST)
        data_bytes = json_data.encode('utf-8')

        # 2. Construction de la requête
        req = urllib.request.Request(API_URL, data=data_bytes)
        req.add_header('Content-Type', 'application/json')
        req.add_header('Content-Length', len(data_bytes))

        # 3. Exécution de la requête
        # Note : Si vous utilisez le contexte SSL non vérifié (voir config ci-dessus):
        # response = urllib.request.urlopen(req, context=ssl_context)
        
        # Pour une connexion standard (recommandé si certificat valide) :
        response = urllib.request.urlopen(req)
        
        # 4. Traitement de la réponse
        status_code = response.getcode()
        
        if status_code in [200, 201, 202]:
            print(f"   [SUCCÈS] Réponse de l'API: {status_code}")
        else:
            print(f"   [ATTENTION] L'API a répondu avec le statut: {status_code}")
            
    except urllib.error.HTTPError as e:
        print(f"   [ERREUR] Erreur HTTP pour l'article : {e.code} - {e.reason}")
    except urllib.error.URLError as e:
        print(f"   [ERREUR] Problème de connexion (URL ou réseau) : {e.reason}")
    except Exception as e:
        print(f"   [ERREUR] Une erreur inattendue est survenue : {e}")

def lire_csv_et_envoyer():
    """
    Lit le fichier CSV, itère sur les lignes et envoie chaque article.
    """
    try:
        # Ouverture du fichier en mode lecture avec le bon encodage
        with open(CSV_FILE_NAME, mode='r', encoding='utf-8') as file:
            # Utilise csv.DictReader pour lire chaque ligne comme un dictionnaire
            # en utilisant l'en-tête (header) comme clé.
            # On suppose ici un séparateur ';' (point-virgule)
            csv_reader = csv.DictReader(file, delimiter=';')
            
            # Itération sur chaque ligne/article
            for row in csv_reader:
                # La ligne 'row' est déjà un dictionnaire prêt à être envoyé
                envoyer_article_api(row)

    except FileNotFoundError:
        print(f"\n[FATAL] Le fichier '{CSV_FILE_NAME}' est introuvable. Assurez-vous qu'il est dans le répertoire courant.")
    except Exception as e:
        print(f"\n[FATAL] Erreur lors du traitement du fichier CSV : {e}")


if __name__ == "__main__":
    if API_URL == "VOTRE_URL_API_ICI":
        print("ATTENTION : Veuillez remplacer 'VOTRE_URL_API_ICI' par l'URL réelle de votre API dans le script.")
    else:
        print(f"Démarrage de l'envoi des données vers {API_URL}...")
        lire_csv_et_envoyer()
        print("\nProcessus d'envoi terminé.")