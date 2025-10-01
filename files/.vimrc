syntax on
set noerrorbells               " no sound effects
set tabstop=4 softtabstop=4    " how many spaces a tab should use
set shiftwidth=4 
set expandtab
set wildmenu 
set smartindent
set rnu relativenumber         " relative line number
set nowrap
set smartcase 
set noswapfile                 " no swap file (vim creates them by default) 
set nobackup                   " no backup file
set undodir=~/.vim/undodir
set undofile
set cursorline
set incsearch
set formatoptions-=cro
set background=light
colorscheme gruvbox

" Vim jumps to the last position when reopening a file
if has("autocmd")
  au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
endif

" Define skeletons for empty new files
if has("autocmd")
  augroup templates
    autocmd BufNewFile *.sh 0r ~/.vim/templates/skeleton.sh
    autocmd BufNewFile *.html 0r ~/.vim/templates/skeleton.html
  augroup END
endif

