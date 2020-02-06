var lang = confirm("पेज हिंदी में देखने के लिए हाँ {Yes} पर क्लिक करें");
if (lang==true) {
	myFunction();
}

function myFunction() {
	document.getElementById('brand').innerHTML ="कृषि मित्र";
	document.getElementById('a1').innerHTML= "लॉग इन/साइन अप करें";
	document.getElementById('a2').innerHTML = "क्रेता गाइड";
	document.getElementById('a3').innerHTML = "हमारे बारे में";
	document.getElementById('a4').innerHTML = "संपर्क करें";
	document.getElementById('a5').innerHTML = "खेती की सहायता";
	document.getElementById('h2').innerHTML = "मेरा डैशबोर्ड";
	document.getElementById('h3').innerText = "प्रोटोटाइप नाम";
	document.getElementById('role').innerText=  "किसान / क्रेता";
	document.getElementById('l1').innerText = "ईमेल";
	document.getElementById("l2").innerText =  "कुंजिका";
	document.getElementById("l3").innerText = "संपर्क नंबर";
	document.getElementById("l4").innerText = "कुल कमाई / निवेश";
	document.getElementById("l5").innerText = "abc@example.com";
	document.getElementById('b1').innerText=  "नई उपज प्रदान करें";
	document.getElementById('b2').innerText=  "चल रहा है लेन-देन";  
    document.getElementById('b3').innerText=  "रीसेट करें";
    document.getElementById('b4').innerText =  "इस खाते को हटा दें"
	document.getElementById('h4').innerText=  "लेनदेन का इतिहास";
	document.getElementById('t1').innerText =  "क्र.सं. ";
	document.getElementById("t2").innerText = "दिनांक";
	document.getElementById("t3").innerText = "लेन - देन संख्या";
	document.getElementById("t4").innerText = "चीज़ें";
	document.getElementById('t5').innerText=  "मात्रा (किलोग्राम)";
	document.getElementById('t6').innerText=  "शुद्ध राशि (₹)";
}