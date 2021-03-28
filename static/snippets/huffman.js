
mixin = {
	
	delimiters: ['{[', ']}'],
	data:
	{
		tree: [],
		priority: new queue,
		freq: {}, 
		codeBook: {},
		plaintext: '',
		CodeReady: false,
		encodedMsg: '',
		ready: false
	},
methods:
{
		count: function() {
			this.freq = {}
			
			for(i=0; i<this.plaintext.length; i++)
			{		
				if(this.plaintext[i] in this.freq)
				{
					this.freq[this.plaintext[i]]+=1
					
				}
				else {
					this.freq[this.plaintext[i]] = 1
					
				}
			}
		},
		treeMap: function()
		{	
			this.codeBook = {}
			this.tree= new queue
			for(key in this.freq){
				this.tree.push(new node(this.freq[key],key))
			}

			while(this.tree.arr.length !== 1){
			
			a=this.tree.pop()
			b=this.tree.pop()
			c = new node(a.value+b.value, null ,a,b)
			this.tree.push(c)
			
			}
			
				this.create_code(this.tree.pop(),'')
				this.CodeReady = true
		},

		create_code: function(node, strUptil)
		{
			if(node.code != null)
			{
					 this.codeBook[node.code] = strUptil
				
			}
			if(node.r != null){
					 this.create_code(node.r,strUptil+'1')
			}
			if(node.l != null)
			{
					 this.create_code(node.l,strUptil+'0')	
			}
		},
		create_msg: function()
		{	this.count()
			this.treeMap()

			let x =[]
			for(let i=0; i<this.plaintext.length; i++)
			{
				x.push(this.codeBook[this.plaintext[i]])
			}
			console.log(x)
			this.encodedMsg = x.join('')
			this.ready = true
		}
	},

	
	

}