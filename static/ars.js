

let Arr = []

function save(val){

    let data_to_save = {"value": val}         
    $.ajax({
        type: "POST",
        url: "save",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            let all_data = result["data"]
            Rdata = all_data["tosenddata"]
            console.log(Rdata)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

$(document).ready(function(){

	$("#next").click(function() {
		var radioValue = $("input[name='Q1']:checked").val();
		console.log("Array1: " + radioValue)
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array1: " + Arr)
		//location.href='ars_q2.html'
		if(radioValue != null)
			location.href = '/q2'
	})
	$("#next2").click(function() {
		var radioValue = $("input[name='Q2']:checked").val();
		console.log("Array2: " + radioValue)
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array2: " + Arr)
		//location.href='ars_q3.html'
		if(radioValue != null)
			location.href = '/q3'
	})
	$("#next3").click(function() {
		var radioValue = $("input[name='Q3']:checked").val();
		console.log("Array3: " + radioValue)
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array3: " + Arr)
		//location.href='ars_q4.html'
		if(radioValue != null)
			location.href = '/q4'
	})
	$("#next4").click(function() {
		var radioValue = $("input[name='Q4']:checked").val();
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array4: " + Arr)
		//location.href='ars_q5.html'
		if(radioValue != null)
			location.href = '/q5'
	})
	$("#next5").click(function() {
		var radioValue = $("input[name='Q5']:checked").val();
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array5: " + Arr)
		//location.href='ars_q6.html'
		if(radioValue != null)
			location.href = '/q6'
	})
	$("#next6").click(function() {
		var radioValue = $("input[name='Q6']:checked").val();
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array6: " + Arr)
		//location.href='ars_q7.html'
		if(radioValue != null)
			location.href = '/q7'
	})
	$("#next7").click(function() {
		var radioValue = $("input[name='Q7']:checked").val();
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array7: " + Arr)
		//location.href='ars_q8.html'
		if(radioValue != null)
			location.href = '/q8'
	})
	$("#next8").click(function() {
		var radioValue = $("input[name='Q8']:checked").val();
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array8: " + Arr)
		//location.href='ars_q9.html'
		if(radioValue != null)
			location.href = '/q9'
	})
	$("#next9").click(function() {
		var radioValue = $("input[name='Q9']:checked").val();
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array9: " + Arr)
		//location.href='ars_q10.html'
		if(radioValue != null)
			location.href = '/q10'
	})
	$("#Submit").click(function() {
		var radioValue = $("input[name='Q10']:checked").val();
		if(radioValue == "A1" || radioValue == "A2" || radioValue == "A3"){
			Arr.push(1)
			if(radioValue != null)
				save(1)
		}
		else{
			Arr.push(0)
			if(radioValue != null)
				save(0)
		}
		//console.log("Array10: " + Arr)
		//location.href='final.html'
		if(radioValue != null)
			location.href = '/final'
		//$("#updates10").append('<div>Your score is</div')
		//$("#updates10").val("fref")
		//$("#updates10").html("Fill Client")

	})
	/*let scor = 0
	let sum = 0
	for (let i = 0; i < Arr.length; i++) {
        sum += Arr[i];
    }
	scor = sum/10*/
	console.log("Hello there" + Idata)
	$("#updates10").html("SCORE: " + Idata)

	if(parseInt(Idata) < 90){
		$("#updates11").html("You are NOT Focusing. Please try again")
	}
	else{
		$("#updates11").html("You did GOOD. Thank You for taking survey")
	}
/*function log_data(person, client, Reams, count) {

	let newbutton = $('<button>')
	$(newbutton).addClass("Delete1")
	$(newbutton).html("<a href='javascript:void(0);' class='Delete1'>&times;</a>")

	$(".Updates").append('<div class="row"><div class="col-md-2"><div id="Update1">'+person+'</div><br></div><div class="col-md-5"><div id="Update2">'+client+'</div><br></div>    <div class="col-md-2"><div id="Update3">'+Reams+'</div><br></div> <div class="col-md-1">'+$(newbutton).html()+'<br></div> <div class="col-md-2"></div></div>')

	$(".Delete1").click(function() {
		console.log("CLicking")
		let del_name = $(this).parent().siblings(".col-md-2").children("#Update1").text()
		console.log(del_name)

		for(let i=0; i<sales.length; i++){
			let salesperson = sales[i].salesperson
			let k = (salesperson==del_name)
			if(k==1){
				let ind = sales.indexOf(del_name)
				//Updates the JSON during deletion
				delete_json(ind)
			}
		}
		
		$(this).parents(".row").remove();
	});
}*/

/*function addelement_json(element){
	//Adds to the JSON during Addition
	sales.push(element)
}

function delete_json(ind_element){
	//Deletes the JSON during Addition
	sales.splice(ind_element, 1) 
}

function handle_the_output_events(sales){
	//During Addition/Deletion, this will run
	$(".Updates").empty()
	let count = 1
	console.log(sales)
	for(let i=0; i<sales.length; i++){
		log_data(sales[i].salesperson, sales[i].client, sales[i].reams,count)
		count = count+1
	}
}*/

	/*This will be executed first */
	/*handle_the_output_events(sales)
	$( "#Enter_Client" ).focus()

	$( "#Enter_Client" ).autocomplete({
		source: clients
	  });
	$("#Submit").click(function(){
		let person = salesperson_name
		let client = $("#Enter_Client").val()
		let reams = $("#Reams").val()
		if(reams.length !=0 && isNaN(reams)==1){
			$(".Warning_reams").css("color","red")
			$(".Warning_reams").html("Enter a Valid Number for Reams")
			$("#Reams").focus()
		}
		else{
		if(!(client.length == 0 || reams.length==0)){
			let element = 	{
				"salesperson": person,
				"client": client,
				"reams": reams
			}
			addelement_json(element)
			handle_the_output_events(sales)
	
			$("#Enter_Client").val("")
			$("#Reams").val("")
			if(clients.indexOf(client) == -1){
				clients.push(client)
			}
			$(".Warning_reams").html("")
			$(".Warning_client").html("")
			$( "#Enter_Client" ).focus()
		}
		else{
			console.log("Here, I am: ",client.length,reams.length)
			if(client.length==0){
				$("#Enter_Client").focus()
			}
			if(client.length==0){	
				$(".Warning_client").css("color","red")
				$(".Warning_client").html("Fill Client")
			}
			else{
				$(".Warning_client").html("")
				if(reams.length==0 && $("#Enter_Client").is(":focus")){
					$("#Reams").focus()
				}
			}
			if(reams.length==0){
				
				$(".Warning_reams").css("color","red")
				$(".Warning_reams").html("Fill Reams")
			}
			else{
				$(".Warning_reams").html("")
				if(client.length==0 && $("#Reams").is(":focus")){
					$("#Enter_Client").focus()
				}
			}
		}
		}
	})

	$(document).keyup(function (e) {
		let person = salesperson_name
		let client = $("#Enter_Client").val()
		let reams = $("#Reams").val()
		if(e.keyCode == 13 && reams.length !=0 && isNaN(reams)==1){
			$(".Warning_reams").css("color","red")
			$(".Warning_reams").html("Enter a Valid Number for Reams")
			$("#Reams").focus()
		}
		else{
		if(e.keyCode == 13){
			if(client.length==0){
				$("#Enter_Client").focus()
			}
			if(client.length==0){
					
				$(".Warning_client").css("color","red")
				$(".Warning_client").html("Fill Client")
			}
			else{
				$(".Warning_client").html("")
			}
			if(reams.length==0){
				
				$(".Warning_reams").css("color","red")
				$(".Warning_reams").html("Fill Reams")
			}
			else{
				$(".Warning_reams").html("")
				if(client.length==0 && $("#Reams").is(":focus")){
					$("#Enter_Client").focus()
				}
			}
		}
		if ($("#Reams").is(":focus") && (e.keyCode == 13)) {

			if(!(client.length == 0 || reams.length==0)){
				let element = 	{
					"salesperson": person,
					"client": client,
					"reams": reams
				}
				addelement_json(element)
				handle_the_output_events(sales)
		
				$("#Enter_Client").val("")
				$("#Reams").val("")
				if(clients.indexOf(client) == -1){
					clients.push(client)
				}
				$(".Warning_reams").html("")
				$(".Warning_client").html("")
				$( "#Enter_Client" ).focus()
			}
			else{
				console.log("Here, I am: ",client.length,reams.length)
				if(client.length==0){
					
					$(".Warning_client").css("color","red")
					$(".Warning_client").html("Fill Client")
				}
				else{
					$(".Warning_client").html("")
				}
				if(reams.length==0){
					
					$(".Warning_reams").css("color","red")
					$(".Warning_reams").html("Fill Reams")
				}
				else{
					$(".Warning_reams").html("")
				}
			}
		}
		if($("#Enter_Client").is(":focus") &&  (e.keyCode == 13) && client.length!=0){
			$("#Reams").focus()
		}
		}
	});
		//alert("TextBox is Focused. The Div will Fade Out Now");
		//$('#div').fadeOut(2000);*/

})