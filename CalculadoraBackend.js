function calc()
{
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
                
    var oper = document.getElementById('operadores').value;
                
    if(oper === '+')
    {
    document.getElementById('resultado').value = valor1+valor2;
    }
                
    if(oper === '-')
    {
    document.getElementById('resultado').value = valor1-valor2;
                }
                
    if(oper === '/')
    {
    document.getElementById('resultado').value = valor1/valor2;
    }
                
    if(oper === 'X')
    {
    document.getElementById('resultado').value = valor1*valor2;
    }
}
