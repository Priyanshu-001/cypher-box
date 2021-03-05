view = new Vue({
	el: '#playground',
	delimiters: ['{[', ']}'],
	data:
	{	
		a: 7,
		b: 45,
		allowed: true,
		show: false,
		message: "something isn't right",
		inverse:    [1, 9, 21, 15, 3, 19, 7, 23, 11, 5, 17, 25],
		candidates: [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25],
		plaintext: '',
		ciphertext: '',
		gcd: function(a,b)
		{
				if(b==0){
					return a;
				}
				else{
					return this.gcd(b,a%b)
				}
		},
		check: function(){
			return  this.gcd(this.a,26)===1;
		},
		encrypt: function()
		{	
			newText = ''
			for(let i=0; i<this.plaintext.length; i++)
		{	
			
			let charCode = this.plaintext.charCodeAt(i);
			if (charCode <= 122 && charCode >=97)
			{		charCode-=97;
					charCode = (this.a*(charCode%26) + this.b%26)%26;
					charCode += 97;
			} 
			else if(charCode <= 90 && charCode >=65)
			{
				charCode -= 65;
				charCode = (this.a*(charCode%26) + this.b%26)%26;
				charCode += 65;
			}
			
			newText= newText.concat(String.fromCharCode(charCode));

		}
		this.ciphertext = newText
	},
		


		decrypt: function()
		{	
			newText = ''
			for(let i=0; i<this.ciphertext.length; i++)
		{	
			key= this.inverse[this.candidates.indexOf(this.a%26)]
			

			let charCode = this.ciphertext.charCodeAt(i);
			if (charCode <= 122 && charCode >=97)
			{		charCode-=97;
					charCode = (key*(charCode + 26 - this.b%26))%26;

					charCode += 97;
			} 
			else if(charCode <= 90 && charCode >=65)
			{
				charCode -= 65;
				charCode = (key*(charCode + 26 - this.b%26))%26;

				charCode += 65;
			}
			
			
			newText= newText.concat(String.fromCharCode(charCode));

		}
		this.plaintext = newText;
		}


		

	},
	method:
	{
		
	},
	watch:
	{
		plaintext: function()
		{
				this.show=false
				if (this.allowed)
				{
					this.encrypt();
				}
				
		},
		ciphertext: function(){
				this.show = false
				if (this.allowed)
				{
					this.decrypt();
				}

		},
		a: function(){
					this.allowed = this.check();
					this.show = true
					if(!this.allowed){
					this.message = "gcd of 26 and 'a' must be 1"}
					else {
						this.message = "Type in any of the input to update its corresponding output(s)."
					}
		}

	}
})