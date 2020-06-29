# Health-Tracking-Sytem-using-Node-Red-Simulator
Implementation of IOT device simulation using node-red platform along with AWS IOT with MQTT.

Prerequisites
 Install Node.js on your Computer. https://nodejs.org/en/download/
 Install Node Red
o Open Terminal
o Run the command below
o npm install -g --unsafe-perm node-red
o Use sudo npm install -g --unsafe-perm node-red

 Open Github(URL). Download the .json file
 Open Terminal
o Type node-red
o Click on Settings & Click on manage palette
o Go to install tab
o Search Dashboard
o Click on install next to node-red-dashboard

Login to Aws Console
 Find IoT core service
 Go to secure & click on policy
 Click on create policy
 Give any Name to your policy
 In Action type - iot:* & Resource ARN - *
 Check the Allow checkbox and click on create
 Go to Manage & create a thing
 Click on Create a Thing
 Give any Name to your thing
 Click on Next
 Click on create Certificate
 Download Certificate, Private key & RootCa
 Click on attach policy & attach the policy you created before
 Go to Manage & click on thing
 Click on Interact & Copy the Rest API Endpoint
 It should be something like instance.iot.region.amazonaws.com

Open Terminal & type node-red
Check the URL at which your Server is running. It should be something like http://127.0.0.1:1880/
Open the URL in the browser
Node Red will open.
Node-Red
 Click on Settings button and click on Import Flows
 Upload the json files you downloaded before
 Flows will be created
 In Flow Subscribe, Click Temperature Node & click on edit
 Paste the Endpoint in the server & Click on edit next to TLS configuration
 Upload the certificate, private key & Root CA
 Go to flow Publish, Click on Temperature node and repeat the same process
 Open timestamp node. In Repeat field, select Interval from the dropdown. Every 5 seconds.
 Click on Deploy.
Open Aws console
 IoT core service
 Click on Test
 In Field Subscribe to topic type Temperature and click on Subscribe to topic
 Click on Publish Topic
 Repeat the same step for Pacemaker, Glucose, Oxygen, Pressure, BloodP, Pedometer &
Alcohol
 Click on bars at top right
 Open dashboard to see real time dashboard.
