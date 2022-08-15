if (!isLogin || isLogin === 'false') {
    document.getElementById('paynow').disabled = true;
} else if (isLogin === 'true') {
document.getElementById('paynow').disabled = false;
}

let payNow = e => {
	e.preventDefault();
	alert('Hi your booking is successfull!');
};
