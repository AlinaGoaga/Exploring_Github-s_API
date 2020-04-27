This project is meant to help explore [Github's API](https://developer.github.com/v3/).

## How to run

- Install dependencies: `npm install`
- Start server: `npm start`
- Run linting: `tslint --project . --fix`

## Build image with Docker and run it locally on a K8s cluster

Build image:  
`docker build . -t alinag1/github-api-app`

Push the image tagged github-api-app to Docker hub under the alinag1 repository:  
`docker push alinag1/github-api-app`

I am logged into Docker Desktop so the repository attached to my account is recognized.

In case the image has been removed locally, run the below to get the image from Docker Hub:  
`docker pull alinag1/github-api-app`

Create the deployment called my-app based on the image I am retrieving from Docker Hub:  
`kubectl create my-app --image=alinag1/github-api-app`

Create a clusterIP service (only accessible from the cluster; 11001 is the port exposed by nginx):  
`kubectl expose deploy/my-app --port=11001`

Check the resources created:  
`kubectl get all`

![Deployment](https://github.com/AlinaGoaga/Exploring_Github-s_API/blob/master/src/assets/Deployment.png)

In order to access the app when using Docker Desktop (which runs on a small Linux VM rather the the host OS), we need to create a pod (in the example below this is called temporary shell and it is using the bash command from the bretfisher/netshoot image - available on Docker Hub):  
`kubectl run --generator run-pod/v1 tmp-shell --rm -it --image bretfisher/netshoot -- bash`

Once inside the shell, get access to the minified version of the application:  
`curl my-app:11001` (where my-app is the name of the service through which the deployment is exposed)

If using Linux, we can apply curl without worrying about creating the additional pod described above.

In order to get an external IP for the application (which would allow us to test outside the cluster) we'd need to create a Load Balancing service which requires the services of a cloud provider.

## Deploy with Kubernetes in GCP

- Create a GCP account and add your project
- Once in the project, navigate to the Kubernetes Engine => Workloads on the left hand side menu
- Choose Deploy from the top menu to create a Deployment (replace the default image with the your image and choose the cluster on which you want to deploy to)
  ![Container](https://github.com/AlinaGoaga/Exploring_Github-s_API/blob/master/src/assets/GCPContainer.png)
  ![Configuration](https://github.com/AlinaGoaga/Exploring_Github-s_API/blob/master/src/assets/GCPConfig.png)
- To expose the deployment and get an external IP, create a Load Balancing service in the deployment (replace the default port with that from the image being used)
  ![Expose](https://github.com/AlinaGoaga/Exploring_Github-s_API/blob/master/src/assets/ExposeDeployment.png)
  ![GCPDeployment](https://github.com/AlinaGoaga/Exploring_Github-s_API/blob/master/src/assets/GCPDeployment.png)
- To access the application: http://35.222.105:11001

## Note

Added the token temporarily in the application as Github have a per hour limit for unauthenticated API calls (this has been removed before the data was pushed to Github however the placeholder has been left in the code for it to be added at any point when running the app locally)
