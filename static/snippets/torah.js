mixin = {
	el: '#playground',
	
	data:{
		// plaintext: '',
		ciphertext: '',
		key: 1,
		rules: [v => v.length <= 350 || 'Max 350 characters'],
		rule2: [k => k>0 || 'Key must be greater than 0'],
		rule2_: [k => k>0 || '']

	},
	computed:
	{
		plaintext: 	 function()
			{	let k = []
				let i=0
				condition = this.key && this.key>0
				while(i<this.ciphertext.length && condition)
				{	
					k.push(this.ciphertext[i])
					i+=this.key
				}
				return k.join('')

			}
	}
}