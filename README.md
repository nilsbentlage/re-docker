# RE-DOCKER

A nodeJS-Project to auomatically generate WebHooks to refresh all your used Docker Images.




## Installation

Install my-project with npm

```bash
  git clone git@github.com:nilsbentlage/re-docker.git
  cd re-docker
  npm install
```
    
## Usage/Examples

```bash
npm run dev
```

When you run the Project in NodeJS, it outputs a table on stdout which contains all your images and their coresponding WebHook-IDs.

To re-pull an Image and restart the corresponding containers, just hit 
```http(s)://[your-domain]/[the-webhook-id]```

To use this Project properly, you should use a reverse proxy to something like 
```[your-domain]/re-docker/```
