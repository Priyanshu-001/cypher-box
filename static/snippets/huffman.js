class node
{
	 constructor(value, code, l=null,r=null)
	{
		this.value = value;
		this.code = code;
		this.l = l;
		this.r = r;
	}
}
class queue
{	
	constructor(){
	this.arr = []
	this.size = -1
}
	
	push(x)
	{
		this.arr.push(x)
		this.heapify_up(this.arr.length - 1)
		


	}
	swap(a, b)
	{
		let t = this.arr[a]
		this.arr[a] = this.arr[b]
		this.arr[b] = t
	}
	parent(index)
	{
		return (index-index%2)/2
	}
	l_child(index)
	{
		return 2*index + 1
	}
	r_child(index)
	{
		return 2*index + 2
	}
	heapify_up(index)
	{	let parent = this.arr[this.parent(index)].value
		let me = this.arr[index].value
		if (index == 0){
			return;
		}
		else if(parent > me)
		{
			this.swap(this.parent(index), index)
			this.heapify_up(this.parent(index))
		}
	}
	pop()
	{
		let a = this.arr[0].valueOf()

		this.arr[0]=this.arr[this.arr.length -1]
		this.arr.splice(this.arr.length -1)
		this.heapify_down(0)

		return a
	}
	seek()
	{
		return this.arr[0]
	}
	heapify_down(index)
	{	let largest = index
		let l1 = Infinity
		let r2 = Infinity
		// console.log(this.arr[this.l_child(index)].value)
		if (index >= this.arr.length)
		{
			return
		}
		
		if(this.r_child(index)<this.arr.length)
		{
			l1=this.arr[this.l_child(index)].value
			r2= this.arr[this.r_child(index)].value
		}
		else if(this.l_child(index)<this.arr.length)
		{
			l1=this.arr[this.l_child(index)].value
		}
		else
		{
			return
		}

		
			if(l1 < r2)
			{
				largest = this.l_child(index)
			}		
			else{
				largest = this.r_child(index)
			}

			if(this.arr[largest].value < this.arr[index].value)
			{
				this.swap(largest, index)
				this.heapify_down(largest)
			}
		
	}




}
view = new Vue({
	el: '#playground',
	delimiters: ['{[', ']}'],
	data:
	{
		tree: [],
		priority: new queue,
		freq: {}, 
		codeBook: {},
		plaintext: '',
		mapping: {},
		CodeReady: false,
		encodedMsg: '',
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
		}
	},

	
	watch:
	{
		

	}


})