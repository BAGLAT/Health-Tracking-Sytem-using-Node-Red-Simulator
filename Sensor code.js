//###Temperature
var obj = new Object();
    obj.sensor = "temperature";
    obj.temp  = Math.floor(Math.random() * (108 - 90 + 1)) + 90;
if(obj.temp > 98.6) {
    obj.condition = 'High Fever';
}
else{
    obj.condition = 'Under Control';
}
msg.payload= JSON.stringify(obj);
return msg;



//######Glucose Sensor#########
var obj = new Object();
    obj.sensor = "Glucose Monitoring";
    obj.glucose  = Math.floor((Math.random() * (190 - 50 + 1)) + 50);
	num = Math.round(Math.random())
	if(num == 1){
		console.log("Fasting Sugar Level");
		if(obj.glucose > 140 ) {
			obj.condition = 'Sugar Level High';
		}else if(obj.glucose < 70){
			obj.condition = 'Suger Level Low';
		}else{
			obj.condition = 'Under Control';
		}
	}else{
		console.log("Post Meal Sugar Level");
		if(obj.glucose > 190 ) {
			obj.condition = 'Sugar Level High';
		}else if(obj.glucose < 120){
			obj.condition = 'Suger Level Low';
		}else{
			obj.condition = 'Under Control';
		}
	}
msg.payload= JSON.stringify(obj);
return msg;




//######Body Oxygen Sensor#########
var obj = new Object();
    obj.sensor = "Blood Oxygen";
    obj.oxygen  = Math.floor((Math.random() * (100 - 85 + 1)) + 85);
if(obj.oxygen > 95) {
	obj.condition = 'Under Control';
}else if(obj.oxygen > 91 && obj.oxygen < 94){
    obj.condition = 'Oxygen Below Average';
}else{
	obj.condition = 'Attention Required! Oxygen Level Low'
}
msg.payload= JSON.stringify(obj);
return msg;




//######Pressure Sensor - Inhalation Rate#########
var obj = new Object();
    obj.sensor = "Adults Respiratory Monitoring";
    obj.respiratory  = Math.floor((Math.random() * (20 - 12 + 1)) + 12);
if(obj.respiratory < 12 ) {
    obj.condition = 'Breathing Rate Low!!';
}else if(obj.oxygen > 20){
    obj.condition = 'Breathing Rate High!!';
}else{
    obj.condition = 'Under Control';
}
msg.payload= JSON.stringify(obj);
return msg;


//#########Blood Pressure########
var obj = new Object();
    obj.sensor = "blood pressure";
    obj.bp  = Math.floor((Math.random() * (140-120+1)) + 120);
if(obj.bp < 120) 
{
    obj.condition = 'Optimal Blood Pressure';
}
else if(obj.bp > 120 && obj.bp < 140)
{
	obj.condition = 'Normal Blood Pressure';
}
else
{
    obj.condition = 'High Blood Pressure';
}
msg.payload= JSON.stringify(obj);
return msg;


//#########Blood Alcohol################
var obj = new Object();
    obj.sensor = "blood alcohol";
    obj.bal  = Math.random();
if(obj.bal >= 0.0 && obj.bal <= 0.05) 
{
    obj.condition = 'Mild Impairment';
}
else if(obj.bal >= 0.06 && obj.bal <= 0.15)
{
	obj.condition = 'Increased Impairment';
}
else if(obj.bal >= 0.16  && obj.bal <= 0.30)
{
    obj.condition = 'Severe Impairment';
}
else
{
	obj.condition = 'Life Threatning';
}
msg.payload= JSON.stringify(obj);
return msg;


////##########PACEMAKER
var obj = new Object();
    obj.sensor = "Pacemaker";
    obj.heartRate  = Math.floor((Math.random() * 100) + 10);
if(obj.heartRate > 60) {
    obj.condition = 'Under Control';
}
else if(obj.heartRate < 50) {
    obj.condition = 'Low Heart Rate'
}
else if(obj.heartRate > 110){
	obj.condition = 'High Heart Rate'
}
msg.payload= JSON.stringify(obj);
return msg;


//#####PEDOMETER

var obj = new Object();
    obj.sensor = "Pedometer";
    obj.pedo  = (Math.random() * ((15000 - 1) + 1)) + 1;
if(obj.pedo > 10000) {
    obj.condition = 'Congratulations you have met the daily target';
}
else if(obj.condition == 0)
{
	obj.condition = 'Hope you are well';
}
else
{
	obj.condition = 'Your daily target is 10000 steps'
}
msg.payload= JSON.stringify(obj);
return msg;