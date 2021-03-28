mixin = {
	el: '#playground',
	
	data:{
		// plaintext: '',
		ciphertext: '',
		key: 2,
		rules: [v => v.length <= 350 || 'Max 350 characters']

	},
	computed:
	{
		plaintext: 	 function()
			{	let k = []
				let i=0
				while(i<this.ciphertext.length)
				{	console.log(i)
					k.push(this.ciphertext[i])
					i+=this.key
				}
				return k.join('')

			}
	}
}