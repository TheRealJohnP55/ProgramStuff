setTimeout(function() {
    window.sUkt327Dkhi = window.WebSocket;
    window.aRm3gK2Ogm = function(){return {readyState: 0}};
    window.AgK5fn9Lgau = window.WebSocket = function(ip){return new window.aRm3gK2Ogm(ip);};
    window.aYbm28lPgj43 = {};
    window.aYbm28lPgj43.mx = 0;
    window.aYbm28lPgj43.my = 0;
    window.aYbm28lPgj43.ml = 0;
    window.aYbm28lPgj43.ma = 0;
    window.aYbm28lPgj43.mb = 0;
    window.aYbm28lPgj43.wa = false;
    window.aYbm28lPgj43.sa = false;
    window.aYbm28lPgj43.w = null;
    window.aYbm28lPgj43.s = null;
    window.aYbm28lPgj43.aX = -1;
    window.aYbm28lPgj43.aY = -1;
    window.aYbm28lPgj43.p = 0;
    window.aYbm28lPgj43.q=false;
    window.aYbm28lPgj43.socketaddr = null;
    window.addEventListener("load",function(){
        // ??? ??????????
        if(!window.Sm4Kgj0gKrubG)
        Sm4Kgj0gKrubG = window.sUkt327Dkhi;
        window.AgK5fn9Lgau = window.WebSocket = window.aRm3gK2Ogm = function(ip){
        var ws = new Sm4Kgj0gKrubG(ip);
        ws.binaryType="arraybuffer"
        var fakeWS = {};
        for(var i in ws)
            fakeWS[i] = ws[i];
        fakeWS.send = function(){
        //console.log("??????????? ????????! " + arguments[0]);
        var msg = new DataView(arguments[0]);
            /*if((msg.byteLength>0)&&(msg.getUint8(0)!=16)){
            var f="";
            for(var i=0;i<msg.byteLength;i++){
            var a=msg.getUint8(i);
            f=f+a+" ";
            }
            console.log(f);
            }*/
        if(msg.byteLength==21){ // Most clones
            if(msg.getInt8(0, true) == 16){
                window.aYbm28lPgj43.mx = msg.getFloat64(1, true);
                window.aYbm28lPgj43.my = msg.getFloat64(9, true);
                window.aYbm28lPgj43.ml = msg.byteLength;
            }
        } else {
            if(msg.byteLength==13){ // gota.io, gota.io, gota.io
            if(msg.getUint8(0, true) == 16){
                window.aYbm28lPgj43.mx = msg.getInt32(1, true);
                window.aYbm28lPgj43.my = msg.getInt32(5, true);
                window.aYbm28lPgj43.ml = msg.byteLength;
            }else{
                if(msg.byteLength>4){ // gota.io
            if(msg.getUint8(0, true) == 16){
                window.aYbm28lPgj43.mx = msg.getInt16(1, true);
                window.aYbm28lPgj43.my = msg.getInt16(3, true);
                window.aYbm28lPgj43.ml = msg.byteLength;
            }
            }
            }
            }
        }
        return ws.send.apply(ws, arguments);
        };
        ws.onmessage = function(){
        //console.log("??????????? ?????! " + arguments[0].data);
        var msg = new DataView(arguments[0].data);
            if(msg.byteLength>16){ // Most clones
            if(msg.getUint8(0, true) == 64){
                window.aYbm28lPgj43.ma = msg.getFloat64(1, true);
                window.aYbm28lPgj43.mb = msg.getFloat64(9, true);
            }
                }
        fakeWS.onmessage && fakeWS.onmessage.apply(ws, arguments);
        };
        ws.onopen = function(){
        window.aYbm28lPgj43.socketaddr = ws.url;
        //console.log("??????????? ???????????!");
        fakeWS.readyState = 1;
        fakeWS.onopen.apply(ws, arguments);
        };
        ws.onclose = function(){
        fakeWS.onclose.apply(ws, arguments);
        };
        return fakeWS;
        }
        if(location.origin=="http://gota.io"||location.origin=="http://gota.io")connect("");
    })
    var real_minx = -7071;
    var real_miny = -7071;
    var real_maxx = 7071;
    var real_maxy = 7071;
    var lastsent = {
        minx: 0,
        miny: 0,
        maxx: 0,
        maxy: 0
    };

    function valcompare(Y, Z) {
        return 0.01 > Y - Z && -0.01 < Y - Z
    }
    if(window.botServer) {
        var socket = io.connect('ws://' + window.botServer);
    } else {
        var socket = io.connect('ws://127.0.0.1:8081');
    }
    var canMove = true;
    var movetoMouse = true;
    var moveEvent = new Array(2);
    var canvas = document.getElementById("canvas");
    last_transmited_game_server = null;
    socket.on('force-login', function(data) {
        socket.emit("login", {
            "uuid": "NEYB",
            "type": "client"
        });
        transmit_game_server()
    });
   
    $( "#overlays" ).after( "<div style='z-index: 10000000; border-radius: 4px;position: fixed; top: 300px; left: 10px; text-align: center; width: 200px; background-color: #783; opacity: 0.9; padding: 7px;'> <div style='border-radius: 25px; text-indent:0; border:3px solid #fff; display:inline-block; color:#000; font-family:arial; font-size:15px; font-weight:bold; font-style:normal; height:30px; -webkit-box-shadow: 0px 0px 52px -6px rgba(46,204,113,1); -moz-box-shadow: 0px 0px 52px -6px rgba(46,204,113,1); box-shadow: 0px 0px 52px -6px rgb(202, 202, 202); line-height:1.5em; text-decoration:none; text-align:center; width: 190px; color: #fff;'>Craftbots.tk</div><br><br> <a style='color: #ffa; font-family: heletica;'>Bot Amount: </a><a style='color: #fff; font-family: arial;' id='minionCount'></a><br> <a style='color: #aff; font-family: arial;'>Coordinates: </a><a style='color: #faf; font-family: monospace;'id='gh45nmvsy'>0,0</a><br><br><a style='color: #fe5; font-family: arial;'>X - Split Bots</a><br><a style='color: #e5c; font-family: arial;'>R - Eject Mass </a> </div>" );
   socket.on('spawn-count', function(data) {
        document.getElementById('minionCount').innerHTML = '<div style="display: inline;"><span id="botlayer-bots" class="label label-info pull-right">' + data + '</span></a></div>';
    });
    var client_uuid = localStorage.getItem('client_uuid');
    if (client_uuid == null) {
        console.log("generating a uuid for this user");
        client_uuid = ""; var ranStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var ii = 0; ii < 1; ii++) client_uuid += ranStr.charAt(Math.floor(Math.random() * ranStr.length));
        localStorage.setItem('client_uuid', client_uuid)
    }
    socket.emit("login", client_uuid);
    $("#instructions").replaceWith('<br><div class="input-group"><span class="input-group-addon" id="basic-addon1">UUID</span><input type="text" value="' + client_uuid + '" readonly class="form-control"</div>');

    function isMe(cell) {
        for (var i = 0; i < window.agar.myCells.length; i++) {
            if (window.agar.myCells[i] == cell.id) {
                return true
            }
        }
        return false
    }

    function getCell() {
        var me = [];
        for (var key in window.agar.allCells) {
            var cell = window.agar.allCells[key];
            if (isMe(cell)) {
                me.push(cell)
            }
        }
        return me[0]
    }
    var skin_var = 0;

    function emitPosition() {
        console.log(client_uuid);
        socket.emit("pos", {
            "x": window.aYbm28lPgj43.mx-window.aYbm28lPgj43.ma,
            "y": window.aYbm28lPgj43.my-window.aYbm28lPgj43.mb,
            "l": window.aYbm28lPgj43.ml,
            "p": window.aYbm28lPgj43.p,
            "c": window.aYbm28lPgj43.q
        })
        document.getElementById('gh45nmvsy').innerHTML=(~~(window.aYbm28lPgj43.mx-window.aYbm28lPgj43.ma))+","+(~~(window.aYbm28lPgj43.my-window.aYbm28lPgj43.mb));
    }

    function toggleMovement() {
        canMove = !canMove;
        switch (canMove) {
            case true:
                canvas.onmousemove = moveEvent[0];
                moveEvent[0] = null;
                canvas.onmousedown = moveEvent[1];
                moveEvent[1] = null;
                break;
            case false:
                canvas.onmousemove({
                    clientX: innerWidth / 2,
                    clientY: innerHeight / 2
                });
                moveEvent[0] = canvas.onmousemove;
                canvas.onmousemove = null;
                moveEvent[1] = canvas.onmousedown;
                canvas.onmousedown = null;
                break
        }
    }
    interval_id = setInterval(function() {
        emitPosition()
    }, 100);
    interval_id2 = setInterval(function() {
        transmit_game_server_if_changed()
    }, 5000);
    document.addEventListener('keydown', function(e) {
        var key = e.keyCode || e.which;
        switch (key) {
            case 16:
                if(!window.aYbm28lPgj43.sa){
                    window.aYbm28lPgj43.sa=true;
                window.aYbm28lPgj43.s = setInterval(function() {
$("body").trigger($.Event("keydown", { keyCode: 32}));
$("body").trigger($.Event("keyup", { keyCode: 32}));
}, 10);
                }
                break;
            case 87:
                if(!window.aYbm28lPgj43.wa){
                    window.aYbm28lPgj43.wa=true;
window.aYbm28lPgj43.w = setInterval(function() {
$("body").trigger($.Event("keydown", { keyCode: 87}));
$("body").trigger($.Event("keyup", { keyCode: 87}));
}, 10);
                }
                break;
                case 65:
                window.aYbm28lPgj43.p--;
                document.getElementById('ismoveToMouse').innerHTML = window.aYbm28lPgj43.p;
                break;
            case 67:
                window.aYbm28lPgj43.q=!window.aYbm28lPgj43.q;
                if(window.aYbm28lPgj43.q) { document.getElementById('dfdghehfj').innerHTML = "On"; } else { document.getElementById('dfdghehfj').innerHTML = "Off"; }
                break;
            case 88://Olaf4Snow customization. Was 69 ("E").
                socket.emit("cmd", {
            "name": "split"
        })
                break;
            case 82:
                socket.emit("cmd", {
            "name": "eject"
        })
                break;
            case 80:
                window.aYbm28lPgj43.p++;
                document.getElementById('ismoveToMouse').innerHTML = window.aYbm28lPgj43.p;
                break
        }
    });
    document.addEventListener('keyup', function(e) {
        var key = e.keyCode || e.which;
         console.log(key);
        switch (key) {
            case 87:
                clearInterval(window.aYbm28lPgj43.w);
                window.aYbm28lPgj43.wa=false;
                break;
            case 16:
                clearInterval(window.aYbm28lPgj43.s);
                window.aYbm28lPgj43.sa=false;
                break;
        }
    });

    function transmit_game_server_if_changed() {
        if (last_transmited_game_server != window.aYbm28lPgj43.socketaddr) {
            transmit_game_server()
        }
    }

    function transmit_game_server() {
        last_transmited_game_server = window.aYbm28lPgj43.socketaddr;
        socket.emit("cmd", {
            "name": "connect_server",
            "ip": window.aYbm28lPgj43.socketaddr,
            "origin": location.origin
        })
    }
    var mouseX = 0;
    var mouseY = 0;
    $("body").mousemove(function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY
    });
}, 200)
