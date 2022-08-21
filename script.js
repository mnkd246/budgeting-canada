document.getElementById("myButton").onclick = function(){
    var salary = document.getElementById("salary").value;
    var time = document.getElementById("salary-period").value;
    var province = document.getElementById("province").value;
    
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

    console.log("Yearly Salary: ", yearlySalary);

    //Salary Post Tax
    var realSalary = salaryPostTax(yearlySalary);
}

function salaryPostTax(x){
    var finalSalary = x;

    if(province == "alberta"){

    }else if(province == "bc"){

    }else if(province == "manitoba"){
        
    }else if(province == "nb"){
        
    }else if(province == "nl"){
        
    }else if(province == "nt"){
        
    }else if(province == "ns"){
        
    }else if(province == "nunavut"){
        
    }else if(province == "ontario"){
        
    }else if(province == "pei"){
        
    }else if(province == "quebec"){
        
    }else if(province == "saska"){
        
    }else if(province == "yukon"){
        
    }

    return finalSalary;
}

function provTax(x) {
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