view = new Vue({
	el: '#playground',
	data:
	{	key: 4,
		plaintext: '',
		ciphertext: '',
		latest: true,
		shift: (text, k, preseveCaps = true)=>{
				k=k%26;
		var newText = '';
		
		if (!preseveCaps)
		{
				text=text.tolower();
		}
		
		for(let i=0; i<text.length; i++)
		{	
			let charCode = text.charCodeAt(i);
			if (charCode <= 122 && charCode >=97)
			{		charCode-=97;
					charCode = (charCode + k)%26;
					charCode += 97;
			} 
			else if(charCode <= 90 && charCode >=65)
			{
				charCode -= 65;
				charCode = (charCode + k)%26;
				charCode += 65;
			}
			
			newText = newText.concat(String.fromCharCode(charCode));

		}
		
		
		return newText;
		}
		 
	},
	method:
	{
		

	},
	watch:
	{
		plaintext: function() {
			this.latest = true;
			this.ciphertext = this.shift(this.plaintext,this.key);
		},
		ciphertext: function()
		{	this.latest = true;
			this.plaintext = this.shift(this.ciphertext,26 - this.key);
		},
		key: function()
		{
			this.latest = false;
		}
		

	}
})