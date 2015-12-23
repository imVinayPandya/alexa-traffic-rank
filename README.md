# alexa-traffic-rank

Alexa traffic rank this is NPM Module, it will helps you to grab site data from alexa.com. you can store this data in your data and collect your own historical alexa rank data for free. for this you do need any api key or any thing else.

to install this module

<pre>npm install alexa-traffic-rank</pre>

#using this node module you can get
<ul>
	<li>Global Rank</li>
	<li>Country Rank with Country Name</li>
	<li>Bounce Rate</li>
	<li>Daily Page View Per Visitor</li>
	<li>Daily Time on Site</li>
</ul>


#Example:
<pre>
var alexaData = require('alexa-traffic-rank');
alexaData.AlexaWebData("panduboys.com", function(error, result) {
    console.log(result);
})
</pre>

output:
<pre>
{
	globalRank: '206,752',
	countryRank: {
		rank: '21,691',
		country: 'India'
	},
	engagement: {
		bounceRate: '36.50%',
		dailyPageViewPerVisitor: '2.50',
		dailyTimeOnSite: '3:34'
	}
}
</pre>

Note: if some site is not register with alexa.com than may be you can get less data than listed above. some time if it does not shows listed data in output of your program, than assume that alexa does not have enough data or alexa may not have that data yet.
 
for example may be possible that you will get all data listed above except Bounce rate that means this site is new for alexa it may take some to display Baounce rate or may be this site is still not registered with alexa.com
