mixin = {
	
	
	data:{
		plaintext: '',
		ciphertext: '',
		key: 'Cypher',
		fullkey: [],
		dispKey: 'Cypher',
		keyEnter: false,
		message: ''

	},
	methods: {
		encrypt(charCode, key,reverse=false)
		{
			

			if (key <= 122 && key >=97)
			{		key -=97
			} 
			else if(key <= 90 && key >=65)
			{
				key -= 65;
				
			}
			if(reverse)
			{
				key=26-key
			}
			if (charCode <= 122 && charCode >=97)
			{		charCode-=97;
					charCode = (charCode + key)%26;
					charCode += 97;
			} 
			else if(charCode <= 90 && charCode >=65)
			{
				charCode -= 65;
				charCode = (charCode + key)%26;
				charCode += 65;
			}
			

			return String.fromCharCode(charCode)
	
		},
		updateCiphertext: function()
		{
				x = []
				for(let i=0; i<Math.min(this.fullkey.length,this.plaintext.length); i++)
				{
					x.push(this.encrypt(this.plaintext.charCodeAt(i),this.fullkey[i]))
				}
				this.ciphertext = x.join('')

		},
		updateKey: function()
		{
				let x= []
				let y = []
				for(let i=0; i<Math.max(this.plaintext.length,this.ciphertext.length); i++)
				{		if(this.key.length===0)
					{	this.keyEnter = true;
						this.message = "Enter Key"
						break

					}
					this.keyEnter = false
					x.push(this.key.charCodeAt(i%this.key.length))
					y.push(String.fromCharCode(x[i]))
				}
				this.fullkey = x
				this.dispKey = y.join('') 
	
		},
		updatePlaintext: function(){
				x = []
				for(let i=0; i<this.fullkey.length; i++)
				{
					x.push(this.encrypt(this.ciphertext.charCodeAt(i),this.fullkey[i],reverse=true))
				}
				this.plaintext = x.join('')
		},
	},
	watch: {
			plaintext:function() {
				this.updateKey()
				this.updateCiphertext()
				
			},
			key: function(){
				this.updateKey()
				this.updateCiphertext()
			},
			ciphertext: function()
			{
				this.updateKey()
				this.updatePlaintext()
			}
	}
}
