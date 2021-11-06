// This function is for converting the expression like 2.345*10^4 in to simple 23450
/*
Developer: Zohaib Tahir
Linkedin: zohaibtahir24

*/

// check if the number has 'e' then replace it with '*10^'
if(number.includes('e') == true)
        {
            number = number.replace(new RegExp("e", "g"), '*10^');
        }

function SNtoRealNumber(num){
    if(num.includes('*') && num.includes('^')){
		var splited_num_array = num.split('*');
		var float_number = splited_num_array[0];
		var power_number_array = splited_num_array[1].split('^');
		var power_number = power_number_array[1];
		if(power_number.includes('+')){
			var simple_p_number = power_number.split('+');
			var power_ten = '1';
			for(let i=0; i<simple_p_number[1];i++){
				power_ten += 0;
			}
			final_number = Number(float_number * power_ten).toPrecision();
		}
		if(power_number.includes('-')){
			var simple_p_number = power_number.split('-');
			var power_ten = '1';
			for(let i=0; i<simple_p_number[1];i++){
				power_ten += 0;
			}
			final_number = float_number / power_ten;
		}
        return final_number;
    }else{
        return num;
    }
} 