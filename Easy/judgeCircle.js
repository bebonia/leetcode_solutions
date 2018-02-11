var judgeCircle = function(moves) {
    
    var current_position = [0,0];
    
    var moves_array = moves.split("");
    
    moves_array.forEach(function(move) {
        
        if(move === "U") {
          current_position[1] += 1;
        }
        
        else if(move === "D") {
          current_position[1] -= 1;
        }
        
        else if(move === "L") {
          current_position[0] -= 1;
        }
        
        else if(move === "R") {
          current_position[0] += 1;
        }
        
        else {
          
        }             
        
    })
    
    if(current_position[0] === 0 && current_position[1] === 0) {
        return true;
    }
    
    else {
        return false;
    }
    
};

