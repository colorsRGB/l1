function myFunction()
{
var name=prompt("Пожалуйста, введите число","0");
//prompt выводит сообщение и ждёт, пока пользователь
//введёт текст, а затем возвращает введённое значение
//или null, если ввод отменён (CANCEL/Esc).
  if (name!=null)
    {
      if((name%2)==0)
        alert("чет");
          else
            alert("нечет");
    }
}
