$(function() {
	//日期初始化
	$("#datepicker").datepicker();
	$("#datepicker1").datepicker();
	//上传文件初始化
	$("#testFileUpload").fileinput({        
		language: 'fr',
		        uploadUrl: '#',
		        allowedFileExtensions: ['jpg', 'png', 'gif'],
		        'elErrorContainer': '#errorBlock'    
	});
	jQuery("#file-select1").fileinput({        
		language: 'fr',
		        uploadUrl: '#',
		        allowedFileExtensions: ['jpg', 'png', 'gif'],
		        'elErrorContainer': '#errorBlock'    
	});
	//上传测试报告产品信息加行
	$("#testAddRow").click(function() {
		$('#testProductInfo').append('<tr><td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"品牌名称\" \/><\/td><td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"订单号\" \/><\/td><td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"产品型号\/款号\/货号\" \/><\/td><\/tr>');
	});

});

function showDisable(input) {
	$(input).children().attr('style', '');
}

function setDisable(input) {
	$(input).children('span:last-child').attr('style', 'display: none;');
	$(input).children('span:last-child').prev().attr('style', 'display: none;');
}

function addSmallRow(txt) {
	var tr = hasRowspan($(txt).closest('tr'));
	var tdFirst = tr.children('td:first-child');
	var tdSecond = tdFirst.next();
	var rowPlus = parseInt(tdFirst.attr('rowspan')) + 1;
	$(
		"<tr style=\"background-color: rgb(243,243,243);\">" +
		"<td align=\"center\" style=\"vertical-align: middle;\">" +
		"<div class=\"input-group input-group-md\" onmouseenter=\"showDisable(this)\" onmouseleave=\"setDisable(this)\">" +
		"<input type=\"text\" class=\"form-control\" placeholder=\"手动输入\" aria-describedby=\"sizing-addon1\">" +
		"<span class=\"input-group-addon plusOnSite\" style=\"display: none;\" onclick=\"addSmallRow(this)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"><\/i><\/span>" +
		"<span class=\"input-group-addon minusOnSite\" style=\"display: none;\" onclick=\"minusSmallRow(this)\"><i class=\"fa fa-minus\" aria-hidden=\"true\" ><\/i><\/span>" +
		"<\/div>" +
		"<\/td>" +
		"<td style=\"vertical-align: middle;\">" +
		"<div class=\"form-group\">" +
		"<select class=\"form-control\">" +
		"<option>No applicabel<\/option>" +
		"<option>Pass<\/option>" +
		"<option>Fail<\/option>" +
		"<option>Pending<\/option>" +
		"<\/select>" +
		"<\/div>" +
		"<\/td>" +
		"<\/tr>"
	).insertAfter(tr);
	tdFirst.attr('rowspan', rowPlus);
	tdSecond.attr('rowspan', rowPlus);
}

function addSmallRow2(txt) {
	var tr = hasRowspan($(txt).closest('tr'));
	var tdFirst = tr.children('td:first-child');
	var tdSecond = tdFirst.next();
	var rowPlus = parseInt(tdFirst.attr('rowspan')) + 1;
	tr.closest('tbody').append(
		"<tr>" +
		"<td align=\"center\" style=\"vertical-align: middle;\">" +
		"<div class=\"input-group input-group-md\" onmouseenter=\"showDisable(this)\" onmouseleave=\"setDisable(this)\">" +
		"<input type=\"text\" class=\"form-control\" placeholder=\"手动输入\" aria-describedby=\"sizing-addon1\">" +
		"<span class=\"input-group-addon plusOnSite\" style=\"display: none;\" onclick=\"addSmallRow2(this)\"><i class=\"fa fa-plus\" aria-hidden=\"true\"><\/i><\/span>" +
		"<span class=\"input-group-addon minusOnSite\" style=\"display: none;\" onclick=\"minusSmallRow(this)\"><i class=\"fa fa-minus\" aria-hidden=\"true\" ><\/i><\/span>" +
		"<\/div>" +
		"<\/td>" +
		"<td style=\"vertical-align: middle;\">" +
		"<div class=\"form-group\">" +
		"<select class=\"form-control\">" +
		"<option>No applicabel<\/option>" +
		"<option>Pass<\/option>" +
		"<option>Fail<\/option>" +
		"<option>Pending<\/option>" +
		"<\/select>" +
		"<\/div>" +
		"<\/td>" +
		"<\/tr>"
	);
	tdFirst.attr('rowspan', rowPlus);
	tdSecond.attr('rowspan', rowPlus);
}

function minusSmallRow(txt) {
	var tr = hasRowspan($(txt).closest('tr'));
	var tdFirst = tr.children('td:first-child');
	var tdSecond = tdFirst.next();
	var rowMinus = parseInt(tdFirst.attr('rowspan')) - 1;
	if(rowMinus == 0) {
		alert('已是第一行');
		return false;
	}
	tr.next().remove();
	tdFirst.attr('rowspan', rowMinus);
	tdSecond.attr('rowspan', rowMinus);
}

function hasRowspan(trInput) {
	if(trInput.hasClass('Head')) {
		return trInput;
	}
	return hasRowspan(trInput.prev());
}

function addResultDataRow() {
	$('#resultData').append(
		"<tr class=\"Head\">" +
		"<td align=\"center\" style=\"vertical-align: middle;\" rowspan=\"1\">" + "<input type=\"text\" style=\"border: none;\" placeholder=\"手动输入\">" + "<\/td>" +
		"<td style=\"vertical-align: middle;\" style=\"vertical-align: middle;\">" +
		"<div class=\"form-group form-horizontal\">" +
		"<select class=\"form-control\">" +
		"<option>" + "No applicabel<\/option>" +
		"<option>" + "Pass<\/option>" +
		"<option>" + "Fail<\/option>" +
		"<option>" + "Pending<\/option>" +
		"<\/select>" +
		"<\/div>" +
		"<\/td>" +
		"<td align=\"center\" style=\"vertical-align: middle;\">" +
		"<div class=\"input-group input-group-md\" onmouseenter=\"showDisable(this)\" onmouseleave=\"setDisable(this)\">" +
		"<input type=\"text\" class=\"form-control\" placeholder=\"手动输入\" aria-describedby=\"sizing-addon1\">" +
		"<span class=\"input-group-addon\" style=\"display: none;\" onclick=\"addSmallRow2(this)\">" + "<i class=\"fa fa-plus\" aria-hidden=\"true\">" + "<\/i>" + "<\/span>" +
		"<span class=\"input-group-addon\" style=\"display: none;\" onclick=\"minusSmallRow(this)\">" + "<i class=\"fa fa-minus\" aria-hidden=\"true\" >" + "<\/i>" + "<\/span>" +
		"<\/div>" +
		"<\/td>" +
		"<td style=\"vertical-align: middle;\">" +
		"<div class=\"form-group form-horizontal\">" +
		"<select class=\"form-control\">" +
		"<option>" + "No applicabel<\/option>" +
		"<option>" + "Pass<\/option>" +
		"<option>" + "Fail<\/option>" +
		"<option>" + "Pending<\/option>" +
		"<\/select>" +
		"<\/div>" +
		"<\/td>" +
		"<\/tr>"
	);
}

function computingOQL(txt) {
	var curNum = parseFloat($(txt).val());
	var prevNum = parseFloat($(txt).parent().prev().children().val());
	var nextNum = parseFloat($(txt).parent().next().children().val());
	var oQL = $(txt).parent().parent().children('td:last-child').children();
	var result;
	var simpleSizeSum = parseFloat($('#simpleSizeSum').val());
	var measurementSum = parseFloat($('#measurementSum').val());
	var totalOQL = $('#totalOQL');
	if(isNaN(curNum)) {
		alert('请输入正确数字!');
		return false;
	}
	if(!isNaN(nextNum)) {
		result = (curNum / nextNum).toFixed(4) * 100;
		(isNaN(simpleSizeSum)) ? simpleSizeSum = curNum: simpleSizeSum += curNum;
		(isNaN(measurementSum)) ? measurementSum = nextNum: measurementSum += nextNum;
		$('#simpleSizeSum').attr("value", String(simpleSizeSum));
		$('#measurementSum').attr("value", String(measurementSum));
		oQL.attr('value', String(result) + "%");
		totalOQL.attr('value', String((simpleSizeSum / measurementSum).toFixed(4) * 100) + "%");
		return false;
	}
	if(!isNaN(prevNum)) {
		result = (prevNum / curNum).toFixed(4) * 100;
		(isNaN(simpleSizeSum)) ? simpleSizeSum = prevNum: simpleSizeSum += prevNum;
		(isNaN(measurementSum)) ? measurementSum = curNum: measurementSum += curNum;
		$('#simpleSizeSum').attr("value", String(simpleSizeSum));
		$('#measurementSum').attr("value", String(measurementSum));
		oQL.attr('value', String(result) + "%");
		totalOQL.attr('value', String((simpleSizeSum / measurementSum).toFixed(4) * 100) + "%");
		return false;
	}
}

function addOQLRow() {
	$('#computingFirstTable').append(
		"<tr>" +
		"<td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"手动输入\" \/><\/td>" +
		"<td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"输入项目\" \/><\/td>" +
		"<td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"输入型号\"  onchange=\"computingOQL(this)\" \/><\/td>" +
		"<td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"输入测量值\"  onchange=\"computingOQL(this)\" \/><\/td>" +
		"<td><input type=\"text\" class=\"col-md-12\" style=\"border: none;\" placeholder=\"比率\" readonly=\"readonly\" \/><\/td>" +
		"<\/tr>"
	);
}

function computingTotalSampleSize(txt) {
	var singleSampleSize = parseFloat($(txt).val());
	var totalSampleSize = parseFloat($('#totalSampleSize').val());
	isNaN(totalSampleSize) ? totalSampleSize = 0 : null;
	totalSampleSize += singleSampleSize;
	$('#totalSampleSize').attr('value', String(totalSampleSize));
	computingTotalOQLlast();
}

function computingTotalCritical(txt) {
	var singleCritical = parseFloat($(txt).val());
	var totalCritical = parseFloat($('#totalCritical').val());
	isNaN(totalCritical) ? totalCritical = 0 : null;
	totalCritical += singleCritical;
	$('#totalCritical').attr('value', String(totalCritical));
	computingTotalDefectivePiece();
}

function computingTotalMajor(txt) {
	var singleMajor = parseFloat($(txt).val());
	var totalMajor = parseFloat($('#totalMajor').val());
	isNaN(totalMajor) ? totalMajor = 0 : null;
	totalMajor += singleMajor;
	$('#totalMajor').attr('value', String(totalMajor));
	computingTotalDefectivePiece();
}

function computingTotalMinor(txt) {
	var singleMinor = parseFloat($(txt).val());
	var totalMinor = parseFloat($('#totalMinor').val());
	isNaN(totalMinor) ? totalMinor = 0 : null;
	totalMinor += singleMinor;
	$('#totalMinor').attr('value', String(totalMinor));
	computingTotalDefectivePiece();
}

function computingTotalFunction(txt) {
	var singleFunction = parseFloat($(txt).val());
	var totalFunction = parseFloat($('#totalFunction').val());
	isNaN(totalFunction) ? totalFunction = 0 : null;
	totalFunction += singleFunction;
	$('#totalFunction').attr('value', String(totalFunction));
}

function computingTotalDefectivePiece() {
	var critical = parseFloat($('#totalCritical').val());
	var marjor = parseFloat($('#totalMajor').val());
	var minor = parseFloat($('#totalMinor').val());
	isNaN(critical) ? critical = 0 : null;
	isNaN(marjor) ? marjor = 0 : null;
	isNaN(minor) ? minor = 0 : null;
	sum = critical + marjor + (minor / 2);
	$("#totalDefectivePiece").attr("value", String(sum));
	computingTotalOQLlast();
}

function computingTotalOQLlast() {
	var totalDefectivePiece = parseFloat($("#totalDefectivePiece").val());
	var totalSampleSize = parseFloat($("#totalSampleSize").val());
	var result;
	isNaN(totalDefectivePiece) ? totalDefectivePiece = 0 : null;
	isNaN(totalSampleSize) ? totalSampleSize = 0 : null;
	if(totalSampleSize == 0) return false;
	result = (totalDefectivePiece / totalSampleSize).toFixed(4) * 100;
	$("#totalOQLlast").attr("value", String(result) + "%");

}

function addLastRow() {
	$("#computingSecondTable").append("<tr>" +
		"<td>"

		+
		"<input type=\"text\" placeholder=\"手动输入\" class=\"col-md-12\" style=\"border: none;\"><\/td>" +
		"<td>"

		+
		"<input type=\"text\" placeholder=\"手动输入\" class=\"col-md-12\" style=\"border: none;\"><\/td>" +
		"<td>"

		+
		"<input type=\"text\" placeholder=\"输入数字\" class=\"col-md-12\" style=\"border: none;\" onchange=\"computingTotalSampleSize(this)\"><\/td>" +
		" <td style=\"vertical-align: middle;\">" +
		"<div class=\"form-group\">" +
		"<select class=\"form-control\">" +
		"<option>No applicabel<\/option>" +
		"<option>Pass<\/option>" +
		"<option>Fail<\/option>" +
		"<option>Pending<\/option>" +
		"<\/select>" +
		"<\/div>" +
		"<\/td>" +
		"<td>"

		+
		"<input type=\"text\" placeholder=\"输入数字\" class=\"col-md-12\" style=\"border: none;\" onchange=\"computingTotalCritical(this)\"><\/td>" +
		"<td>"

		+
		"<input type=\"text\" placeholder=\"输入数字\" class=\"col-md-12\" style=\"border: none;\" onchange=\"computingTotalMajor(this)\"><\/td>" +
		"<td>"

		+
		"<input type=\"text\" placeholder=\"输入数字\" class=\"col-md-12\" style=\"border: none;\" onchange=\"computingTotalMinor(this)\"><\/td>" +
		"<td>"

		+
		"<input type=\"text\" placeholder=\"输入数字\" class=\"col-md-12\" style=\"border: none;\" onchange=\"computingTotalFunction(this)\"><\/td>"

		+
		"<\/tr>");
}

function getSelectLabLisence() {
	var options = $("#verifyLab option:selected");
	$("#labLisence").empty();
	$("#labLisence").append(options.text());
}

function test2Verify() {
	$('#verify-tab').attr("style", "color:#a0a0a0;");
	$('#test-tab').attr('style', 'color:black;');
}

function verify2Test() {
	$('#test-tab').attr('style', 'color:#a0a0a0;');
	$('#verify-tab').attr("style", "color:black;");
}
function uploadTestReport(){
	var report={
		testReportNumber:$("#testReportNumber").val()
	};
$.ajax({
	type:"post",
	url:"/haha",
	data:report,
	async:true
});
	alert(report.testReportNumber);
}
