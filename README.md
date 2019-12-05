# iw_serverless_app


### How to run 

1. You need Install amplify CLI for this  package 


```
npm install -g @aws-amplify/cli

```

2 inside the app directory, install Amplify 

```
npm install -g @aws-amplify/cli
```


3. Local developing 

 ```
npm start
 ```


4. Push your application to AWS (S3,Lambda,API Gateway)

Enable static web hosting for the app on Amazon S3. In a terminal window, change to the root directory of your app and run the following command:
```
$ amplify add hosting
```

Run the following command to publish the app to AWS:


```
amplify publish
```

5. my app 's status 


| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Function | myapplabel1     | Update    | awscloudformation |
| Api      | amplifyapi      | No Change | awscloudformation |
| Hosting  | S3AndCloudFront | No Change | awscloudformation |

Hosting endpoint: http://myapp-20191204174828-hostingbucket-test.s3-website-ap-southeast-2.amazonaws.com
API endpoint: