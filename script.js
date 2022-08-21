document.getElementById("myButton").onclick = function(){
    var salary = document.getElementById("salary").value;
    var time = document.getElementById("salary-period").value;
    
    //Calculating Gross Yearly Salary
    var yearlySalary = 0;

    if(time == "hour"){
        yearlySalary = salary * 2080;
    }else if(time == "day"){
        yearlySalary = salary * 260;
    }else if(time == "week"){
        yearlySalary = salary * 52;
    }else if(time == "biweekly"){
        yearlySalary = salary * 26;
    }else if(time == "month"){
        yearlySalary = salary * 12;
    }else if(time == "year"){
        yearlySalary = salary;
    }

    //Salary Post Tax
    var realSalary = salaryPostTax(yearlySalary);

    //Results
    document.getElementById("results").innerHTML = "";
    document.getElementById("results").innerHTML = results(yearlySalary);
}

function salaryPostTax(x){
    var finalSalary = x * fedTax(x) * provTax(x) * cppTax() * eiTax();
    
    return finalSalary;
}

function results(sal){
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    var a = "Gross Salary: " + formatter.format(sal);
    var b = "Salary After Tax: " + formatter.format(salaryPostTax(sal));
    var c = "Money To Federal Tax: " + formatter.format(sal-(sal*fedTax(sal)));
    var d = "Money To Provincial Tax: " + formatter.format(sal-(sal*provTax(sal)));
    var e = "Money to Canada Pension Plan: " + formatter.format(sal-(sal*cppTax()));
    var f = "Money to Employment Insurance: " + formatter.format(sal-(sal*eiTax));

    var a2 = "Gross Salary: " + formatter.format(sal/12);
    var b2 = "Salary After Tax: " + formatter.format((salaryPostTax(sal))/12);
    var c2 = "Money To Federal Tax: " + formatter.format((sal-(sal*fedTax(sal)))/12);
    var d2 = "Money To Provincial Tax: " + formatter.format((sal-(sal*provTax(sal)))/12);
    var e2 = "Money to Canada Pension Plan: " + formatter.format((sal-(sal*cppTax()))/12);
    var f2 = "Money to Employment Insurance: " + formatter.format((sal-(sal*eiTax))/12);

    return "<h2>Yearly Stats:</h2>" + 
    a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "<br>" + f + 
    "<h2>Monthly Stats: </h2>" + 
    a2 + "<br>" + b2 + "<br>" + c2 + "<br>" + d2 + "<br>" + e2 + "<br>" + f2;
}

/*List of Taxes*/
function cppTax() {     //canada pension plan
    return 0.943;
}

function eiTax(){       //employment insurance
    return 0.9842;
}

function fedTax(x) {    //federal tax
    if(x <= 10275){
        return 0.9;
    }else if(x <= 41775){
        return 0.88;
    }else if(x <= 89075){
        return 0.78;
    }else if(x <= 170050){
        return 0.76;
    }else if(x <= 215950){
        return 0.68;
    }else if(x <= 539900){
        return 0.65;
    }else{
        return 0.63;
    }
}

function provTax(x) {   //provincial tax
    var province = document.getElementById("province").value;
    if(province == "alberta"){
        if (x <= 131220){return 0.9;}
        else if(x <= 157464){return 0.88;}
        else if(x <= 209952){return 0.87;}
        else if(x <= 314928){return 0.86;}
        else{return 0.85;}
    }
    
    else if(province == "bc"){
        if(x <= 43070){return 0.9494;}
        else if(x <= 86141){return 0.923;}
        else if(x <= 98901){return 0.895;}
        else if(x <= 120094){return 0.8771;}
        else if(x <= 162832){return 0.853;}
        else if(x <= 227091){return 0.832;}
        else{return 0.795;}
    }
    
    else if(province == "manitoba"){
        
    }
    
    else if(province == "nb"){
        
    }
    
    else if(province == "nl"){
        
    }
    
    else if(province == "nt"){
        
    }
    
    else if(province == "ns"){
        
    }
    
    else if(province == "nunavut"){
        
    }
    
    else if(province == "ontario"){
        
    }
    
    else if(province == "pei"){
        
    }
    
    else if(province == "quebec"){
        
    }
    
    else if(province == "saska"){
        
    }
    
    else { //yukon
        if(x <= 50197){return 0.936;}
        else if(x <= 100392){return 0.91;}
        else if(x <= 155625){return 0.891;}
        else if(x <= 500000){return 0.872;}
        else{return 0.85;}
    }
}