function tinh(){
    var nam = +document.getElementById("nam").value;
    var can = nam % 10;
    var chi = nam % 12;
    var is_correct_canh = can === 0;
    var is_correct_tan = can === 1;
    var is_correct_nham = can === 2;
    var is_correct_quy = can === 3;
    var is_correct_giap = can === 4;
    var is_correct_at = can === 5;
    var is_correct_binh = can === 6;
    var is_correct_dinh = can === 7;
    var is_correct_mau = can === 8;
    var is_correct_ky = can === 9;
    


    if (is_correct_canh){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Canh Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Canh Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Canh Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Canh Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Canh Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Canh Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Canh Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Canh Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Canh Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Canh Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Canh Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Canh Mùi";
                break;
                


            }
        
        
    }
    if (is_correct_tan){
        
        switch (chi){
            case 0:
            document.getElementById("result").innerHTML = nam + " là năm Tân Thân";
            break;
            case 1:
            document.getElementById("result").innerHTML = nam + " là năm Tân Dậu";
            break;
            case 2:
            document.getElementById("result").innerHTML = nam + " là năm Tân Tuất";
            break;
            case 3:
            document.getElementById("result").innerHTML = nam + " là năm Tân Hợi";
            break;
            case 4:
            document.getElementById("result").innerHTML = nam + " là năm Tân Tý";
            break;
            case 5:
            document.getElementById("result").innerHTML = nam + " là năm Tân Sửu";
            break;
            case 6:
            document.getElementById("result").innerHTML = nam + " là năm Tân Dần";
            break;
            case 7:
            document.getElementById("result").innerHTML = nam + " là năm Tân Mão";
            break;
            case 8:
            document.getElementById("result").innerHTML = nam + " là năm Tân Thìn";
            break;
            case 9:
            document.getElementById("result").innerHTML = nam + " là năm Tân Tỵ";
            break;
            case 10:
            document.getElementById("result").innerHTML = nam + " là năm Tân Ngọ";
            break;
            case 11:
            document.getElementById("result").innerHTML = nam + " là năm Tân Mùi";
            break;
            


        }
    
    
    }
    if (is_correct_nham){
        
        switch (chi){
            case 0:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Thân";
            break;
            case 1:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Dậu";
            break;
            case 2:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Tuất";
            break;
            case 3:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Hợi";
            break;
            case 4:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Tý";
            break;
            case 5:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Sửu";
            break;
            case 6:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Dần";
            break;
            case 7:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Mão";
            break;
            case 8:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Thìn";
            break;
            case 9:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Tỵ";
            break;
            case 10:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Ngọ";
            break;
            case 11:
            document.getElementById("result").innerHTML = nam + " là năm Nhâm Mùi";
            break;
            


        }
    }
        if (is_correct_quy){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Quý Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Quý Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Quý Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Quý Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Quý Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Quý Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Quý Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Quý Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Quý Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Quý Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Quý Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Quý Mùi";
                break;
                


            }
        
        
        }
        if (is_correct_giap){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Giáp Mùi";
                break;
                


            }
        
        
        }
        if (is_correct_at){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Ất Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Ất Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Ất Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Ất Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Ất Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Ất Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Ất Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Ất Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Ất Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Ất Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Ất Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Ất Mùi";
                break;
                


            }
        
        
        }
        if (is_correct_binh){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Bính Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Bính Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Bính Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Bính Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Bính Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Bính Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Bính Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Bính Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Bính Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Bính Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Bính Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Bính Mùi";
                break;
                


            }
        
        
        }
        if (is_correct_dinh){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Đinh Mùi";
                break;
                


            }
        
        
        }
        if (is_correct_mau){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Mậu Mùi";
                break;
                


            }
        
        
        }
        if (is_correct_ky){
        
            switch (chi){
                case 0:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Thân";
                break;
                case 1:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Dậu";
                break;
                case 2:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Tuất";
                break;
                case 3:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Hợi";
                break;
                case 4:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Tý";
                break;
                case 5:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Sửu";
                break;
                case 6:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Dần";
                break;
                case 7:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Mão";
                break;
                case 8:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Thìn";
                break;
                case 9:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Tỵ";
                break;
                case 10:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Ngọ";
                break;
                case 11:
                document.getElementById("result").innerHTML = nam + " là năm Kỷ Mùi";
                break;
                


            }
        
        
        }
        
    
    
}
