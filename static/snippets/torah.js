view = new Vue({
	el: '#playground',
	delimiters: ['{[', ']}'],
	data:{
		// plaintext: '',
		ciphertext: '',
		key: 2

	},
	// watch:
	// 	{
	// 		ciphertext: function()
	// 		{	let k = []
	// 			let i=0
	// 			while(i<this.ciphertext.length)
	// 			{	console.log(i)
	// 				k.push(this.ciphertext[i])
	// 				i+=this.key
	// 			}
	// 			this.plaintext = k.join('')

	// 		}
	// 	},
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
})