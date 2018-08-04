
function ch1( select ){
	this.select = select || null;
	var tne = this+" chijs says : ";
	var dom = document.querySelector( select );
	try{
		ch1
	} catch (err){
		console.warn("chijs get an error : "+err);
	}
	ch1.prototype.loading = function ( anim ) {
		this.anim = anim || null;
		// now type of anim = { }
		var types = {
			allow : null,
			fixed : null,
			image : null,
			error : "default"
		};
		// start new btn
		
		if(dom != "[object HTMLButtonElement]"){
			console.error(tne+"Not allowed Taken not button "+dom+" this make it error ");
			return false;
		}
		if( dom && anim.load == true ){
			var time = 0;
			dom.addEventListener( ( anim.on )? anim.on : "click" ,function ( event ){
				// get all object of  events

				time++;
				if( time == 3){
					time--;
					console.warn( tne+ "times to click it is 2 only !" );
					return false;
				}else{
				var l = event.offsetX;
				var t = event.offsetY;
				if( l > 20){
					var shar = document.createElement("div");
					if( anim.color ){
						shar.style.border = "0.3px solid "+anim.color;
					} else {
						shar.style.border = "0.3px solid #45afc7";
					}
					shar.classList.add("anim-btn-load");
					dom.appendChild( shar );
					// dom.setAttribute("data-list",dom.innerText);
					// dom.innerText = "";
					setTimeout(function(){shar.style.display = "none";},1800)
					//  dom.innerHTML = dom.getAttribute("data-list");
					if( anim.success ){
						try{
							setTimeout(anim.success,1800);
						}catch(warn){
							console.log( warn );
						}
				    }

				} 
			}
			
			});
		} else {
			
		};
	};
	ch1.prototype.load = function ( sect , obj ){
		this.sect = sect || null;
		obj = obj || null;
		if( sect == window ){
             document.body.borderRadius = "50%";
		}else {

		}
		// set types
		if( obj == "get"){
			obj = {
				auto : "all",
				success : "notnull"
			};
			return console.log( {obj} );
		}

	};

};
	const btn = function (s){
	this.s = s || null;
	// append all functions
	return new ch1( s );
};