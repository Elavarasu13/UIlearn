function prime(n)
{
nextprime: for(let i= 2;i<n;i++)
{
for(let j =2;j<i;j++)
{
if(i%j == 0)
continue nextprime;
}
alert(i);
}
}
prime(20);
