view = new Vue({
	el: '#playground',
	data: {
		plaintext:'',
		ciphertext: '',
		codeBook:{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": " "
},
reverseBook: 
{" ":" ", "-----":"0",".----":"1","..---":"2","...--":"3","....-":"4",".....":"5","-....":"6","--...":"7","---..":"8","----.":"9",".-":"a","-...":"b","-.-.":"c","-..":"d",".":"e","..-.":"f","--.":"g","....":"h","..":"i",".---":"j","-.-":"k",".-..":"l","--":"m","-.":"n","---":"o",".--.":"p","--.-":"q",".-.":"r","...":"s","-":"t","..-":"u","...-":"v",".--":"w","-..-":"x","-.--":"y","--..":"z",".-.-.-":".","--..--":",","..--..":"?","-.-.--":"!","-....-":"-","-..-.":"/",".--.-.":"@","-.--.":"(","-.--.-":")"}
},
	watch:
	{
		plaintext: function(){
			this.plaintext = this.plaintext.toLowerCase()
			let texty =[]
		for(let i=0; i<this.plaintext.length; i++){
			
			
			texty.push(this.codeBook[this.plaintext[i]])
			
			}
			this.ciphertext = texty.join(' ')

		},
		ciphertext: function()
		{
			let sd = this.ciphertext.split(' ')
			let xt=[]
			for(let i=0; i<sd.length; i++)
			{
				xt.push(this.reverseBook[sd[i]])

			}
			this.plaintext = xt.join('')

		}
	}
})