
mixin = {
	delimiters: ['[[', ']]'],
	data:
	{
		ascii: '',
		plaintext: '',
		numberArray: [],
	},
	method: {

	},
	watch: {
		plaintext: function(){
			this.numberArray = []

			for(let i=0; i<this.plaintext.length; i++)
			{
				this.numberArray.push(this.plaintext.charCodeAt(i))
			}

			this.ascii = this.numberArray.join(' ')
		},
		ascii: function()
		{
			this.numberArray = this.ascii.split(' ')
			let textArray = []
			for(let i=0; i<this.numberArray.length; i++)
			{
				textArray.push(String.fromCharCode(this.numberArray[i]))
			}
			console.log(textArray.join(''))
		}
	}
}
