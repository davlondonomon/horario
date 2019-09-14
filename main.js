class asignatura{
    constructor (nombre,codigo,horario,creditos=3,grupo=1,profesor=""){
        this.nombre=nombre
        this.codigo=codigo
        this.profesor=profesor
        this.creditos=creditos
        this.grupo=grupo
        this.horario=horario
    }
}
class horaLugar{
    constructor (dia,horaInicio,horaFin,salon=""){
        this.dia=dia
        this.salon=salon
        this.horaInicio=horaInicio
        this.horaFin=horaFin
    }
}
function tarjetaAsignatura(asignatura){
    return asignatura.nombre

}

function getHorarioHtml(asignaturas){
    var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
    var html='<table class="horario">'
    html+='    <tr>'
    html+='        <th scope="col">Hora</th>'
    html+='        <th>Lunes</th>'
    html+='        <th>Martes</th>'
    html+='        <th>Miercoles</th>'
    html+='        <th>Jueves</th>'
    html+='        <th>Viernes</th>'
    html+='        <th>Sábado</th>'
    html+='        <th>Domingo</th>'
    html+='    </tr>'
    for (hora = 6; hora < 21; hora++) {
        html+='<tr class="h'+hora+'">'
        html+='<th class="hora">'+hora+':00</th>'
        for (dia in dias){
            var d=dias[dia]
            var horaFin=0
            var horaInicio = 0
            for (asignatura in asignaturas){
                var a = asignaturas[asignatura]
                var horarios = a.horario //lista de horarios
                for (horario in horarios){
                    var h = horarios[horario]
                    if (h.dia == d && (h.horaInicio <= hora && h.horaFin > hora)){
                        var materia = asignaturas[asignatura]
                        horaFin = h.horaFin
                        horaInicio = h.horaInicio
                    }
                }
            }
            if (horaFin == 0){
                html+='<td class="'+dias[dia]+'"></td>'
            }else if (horaInicio == hora){
                var largo = horaFin-horaInicio
                html+='<td class="'+dias[dia]+'" rowspan="'+largo+'">'+tarjetaAsignatura(materia)+'</td>'
            }
        }
    }
    html+='</table>'
    return html
}

var lun0608 = new horaLugar("lunes",06,08)
var lun0810 = new horaLugar("lunes",08,10)
var lun1012 = new horaLugar("lunes",10,12)
var lun1214 = new horaLugar("lunes",12,14)
var lun1416 = new horaLugar("lunes",14,16)
var lun1618 = new horaLugar("lunes",16,18)
var lun1820 = new horaLugar("lunes",18,20)

var mar0608 = new horaLugar("martes",06,08)
var mar0810 = new horaLugar("martes",08,10)
var mar1012 = new horaLugar("martes",10,12)
var mar1214 = new horaLugar("martes",12,14)
var mar1416 = new horaLugar("martes",14,16)
var mar1618 = new horaLugar("martes",16,18)
var mar1820 = new horaLugar("martes",18,20)

var mier0608 = new horaLugar("miercoles",06,08)
var mier0810 = new horaLugar("miercoles",08,10)
var mier1012 = new horaLugar("miercoles",10,12)
var mier1214 = new horaLugar("miercoles",12,14)
var mier1416 = new horaLugar("miercoles",14,16)
var mier1618 = new horaLugar("miercoles",16,18)
var mier1820 = new horaLugar("miercoles",18,20)

var jue0608 = new horaLugar("jueves",06,08)
var jue0810 = new horaLugar("jueves",08,10)
var jue1012 = new horaLugar("jueves",10,12)
var jue1214 = new horaLugar("jueves",12,14)
var jue1416 = new horaLugar("jueves",14,16)
var jue1618 = new horaLugar("jueves",16,18)
var jue1820 = new horaLugar("jueves",18,20)

var vie0608 = new horaLugar("viernes",06,08)
var vie0810 = new horaLugar("viernes",08,10)
var vie1012 = new horaLugar("viernes",10,12)
var vie1214 = new horaLugar("viernes",12,14)
var vie1416 = new horaLugar("viernes",14,16)
var vie1618 = new horaLugar("viernes",16,18)
var vie1820 = new horaLugar("viernes",18,20)

var sab0608 = new horaLugar("sabado",06,08)
var sab0810 = new horaLugar("sabado",08,10)
var sab1012 = new horaLugar("sabado",10,12)
var sab1214 = new horaLugar("sabado",12,14)
var sab1416 = new horaLugar("sabado",14,16)
var sab1618 = new horaLugar("sabado",16,18)
var sab1820 = new horaLugar("sabado",18,20)

var dom0608 = new horaLugar("domingo",06,08)
var dom0810 = new horaLugar("domingo",08,10)
var dom1012 = new horaLugar("domingo",10,12)
var dom1214 = new horaLugar("domingo",12,14)
var dom1416 = new horaLugar("domingo",14,16)
var dom1618 = new horaLugar("domingo",16,18)
var dom1820 = new horaLugar("domingo",18,20)

var ecuaciones= new asignatura("ecuaciones diferenciales","10000007-m",[mier1214,vie1214],4,1)
var calculo= new asignatura("calculo","10000008-m",[mar0608,jue0608],4,1)
var io= new asignatura("Investigación de operaciones","10000009-m",[mar0810,jue0810],4,1)
document.getElementsByTagName("body")[0].innerHTML+=getHorarioHtml([calculo,ecuaciones,io])
