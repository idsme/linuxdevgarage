echo added aliases to cmd
# alias cannot be nested
alias ls='dir'
alias ni='npm install'
alias ns='npm start -o'
alias yi='yarn install'
#upgrades all libs to latest version
alias yu='yarn upgrade'
alias yul='yarn upgrade --latest' 
alias ys='yarn start'
alias nt='npm test'
alias ga='git add -A'
alias gp='git push -u origin '
alias dp='docker ps '
alias dpa='docker ps -a'
alias dk='docker kill'
alias dr='docker rm '
alias dcu='docker-compose up'
alias dcd='docker-compose down'
alias rmnm='rm /s node_modules'

# Begin important dir section
alias cdb='cd ~/p/mn-wgp'
alias cdui='cd ~/p/mn-wgp-ui'
# End important dir section

# CREATE A NEW REACT-REDUX project
alias cra='create-react-app'
alias nirdt='npm install --save redux-devtools-extension'
alias nir='npm install --save redux'
alias nirr='npm install --save react-redux'
alias nirt='npm install react-templates'
alias nitr='npm install --save @types/react'

# Begin GIT Section
alias gbackend='git clone https://your project url here'
alias gui='git clone https://idsme@bitbucket.org/incentro-ondemand/coop.frontend.git'
alias gcm='git commit -m '
alias gc='git checkout '
alias gba='git branch -a'
alias gp='git pull'

# STEP1
alias gprb='git pull --rebase origin master' 
# STEP2 of rebase.
alias gpf='git push --force origin 1'
# fast forward my branch
alias gpsp='git stash ^& git pull ^& git stash pop'

# End Git Section

