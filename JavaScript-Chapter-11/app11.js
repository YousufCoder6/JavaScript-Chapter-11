// ==========================================
// CHAPTER 11: COMPARISON OPERATORS SOLUTIONS
// ==========================================

function runNotEqual() {
    // Not-equal operator (!==) example from Chapter 11
    var yourTicketNumber = 487209; // Change this number to test
    
    if (yourTicketNumber !== 487208) {
        alert("Better luck next time!");[cite: 21]
    } else {
        alert("Congratulations! Winning ticket matched.");
    }
}

function runComparisonOperators() {
    // Other comparison operators: >, <, >=, <=
    document.write("<h1>Chapter 11 - Comparison Operators Output</h1>");
    document.write("Evaluating conditions from Chapter 11:<br><br>");
    
    if (1 > 0) {
        document.write("1 &gt; 0 is <b>true</b><br>");[cite: 21]
    }
    if (0 < 1) {
        document.write("0 &lt; 1 is <b>true</b><br>");[cite: 21]
    }
    if (1 >= 1) {
        document.write("1 &gt;= 1 is <b>true</b><br>");[cite: 21]
    }
    if (1 <= 1) {
        document.write("1 &lt;= 1 is <b>true</b><br>");[cite: 21]
    }
    
    document.write("<br><a href='chapter11.html'>Go Back</a>");
}