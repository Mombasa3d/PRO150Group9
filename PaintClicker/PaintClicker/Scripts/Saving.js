
function Save(Email, PaintChips, PaintChuncks, Chisls, Workers)
{
    var connection = new ActiveXObject("ADODB.Connection");
    var connectionString = "metadata=res://*/DatabaseModels.PlayerModel.csdl|res://*/DatabaseModels.PlayerModel.ssdl|res://*/DatabaseModels.PlayerModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;data source=98.203.191.102,49172\KissMyAss\HOMESQLSERVER;initial catalog=WebClickerGame;persist security info=True;user id=user;password=mongo;MultipleActiveResultSets=True;App=EntityFramework&quot;";
    connection.Open(connectionString);
    var rs = new ActiveXObject("ADODB.Recordset");
    rs.Open("Select * From Players", connection);
    rs.MoveFirst
    while (!rs.eof)
    {
        //document.write(rs.f)
        //rs.movenext;
    }

    rs.close;
    connection.close;
}

