#!/bin/bash

repositories=(
    "git@git.oo.sss:dddd/kkk/hhh/ggg.git"
    "git@git.oo.sss:dddd/kkk/hhh/mmm.git"
)

for repo_url in "${repositories[@]}"; do
    echo "$repo_url"
    git clone $repo_url --bare
    
    #repo_name=$(basename "$repo_url" .git)
    repo_name=$(basename "$repo_url")
    #echo "$repo_name"
    cd "$repo_name" || exit

    # migration from git.oo.sss to lol.kk.com
    new_git_url=`echo $repo_url | sed 's/git@git\.oo\.sss:/git@lol\.kk\.com:/'`
    git remote set-url origin "$new_git_url"
    echo "$new_git_url"

    git push -u origin --all

    echo "done - $repo_url"
    cd ..
done
