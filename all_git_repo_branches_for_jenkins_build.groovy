import com.cloudbees.plugins.credentials.*
import com.cloudbees.plugins.credentials.common.*
import com.cloudbees.plugins.credentials.domains.*
import com.cloudbees.plugins.credentials.impl.*
import com.cloudbees.jenkins.plugins.sshcredentials.impl.*
import org.jenkinsci.plugins.plaincredentials.impl.*

// jenkins_cred_ID you can find here: http://XXXXXXXXXXXXXX/credentials/store/system/domain/_/

// BE CAREFUL!!! FUCKING GIT CANT USE @ IN YOUR PASSWORD. EVEN THIS IS %40 OR \x40 !!!!!!!!!!

jenkins_cred_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
git_URL = "hello.there.com/general/kenobi.git"

def getListOfBranches(gitRepo) {
        def gettags = "git ls-remote -h ${gitRepo}".execute()
        def branches = []
        def t1 = []
        gettags.text.eachLine {branches.add(it)}
        for(i in branches)
            t1.add(i.split()[1].replaceAll('\\^\\{\\}', '').replaceAll('refs/heads/', ''))
        t1 = t1.unique()
		return t1
}     

domain = Domain.global()
store = SystemCredentialsProvider.getInstance().getStore()
for (credential in store.getCredentials(domain)) {
  if (credential.getId() == "${jenkins_cred_ID}") {
    cred_Username = credential.getUsername()
    cred_Password =credential.getPassword().getPlainText()
  }
}

result = getListOfBranches("http://${cred_Username}:${cred_Password}@${git_URL}");
return result   
