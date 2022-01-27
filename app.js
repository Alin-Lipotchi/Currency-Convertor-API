fetch("https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=USD&want=EUR&amount=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-converter-by-api-ninjas.p.rapidapi.com",
		"x-rapidapi-key": "26322812damsh909f42bf90d25a8p1f23ddjsn63d6b73897c6"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});