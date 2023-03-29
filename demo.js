function addLog(type, message){
    var $log = $('<tr />');
    $log.append($('<th />').text(type));
    $log.append($('<td />').text(message ? JSON.stringify(message) : ''));
    $("#logs table").prepend($log);
}
$(function(){
    $("#logs").append('<table class="table">');
    var isDraggable = isDraggable;
    var isResizable = true;

    // var cy = window.cy = cytoscape({
    //     container: document.getElementById('cy'),
    //     elements: fetch('./demo.json').then(function (res) {
    //       return res.json();
    //     }),
    //     userZoomingEnabled: false,
    //     layout: { name: 'preset' },
    //     style: sbgnStylesheet(cytoscape)
    //   });

    // var mon = require('/data/mon.json'); //with path

    // var mon = [];
    // fetch('/data/mon.json').then(res => mon = res.json());

    var $sc = $("#schedule").timeSchedule({
        startTime: "07:30", // schedule start time(HH:ii)
        endTime: "20:00",   // schedule end time(HH:ii)
        widthTime: 60 * 10,  // cell timestamp example 10 minutes
        timeLineY: 60,       // height(px)
        verticalScrollbar: 20,   // scrollbar (px)
        timeLineBorder: 2,   // border(top and bottom)
        bundleMoveWidth: 6,  // width to move all schedules to the right of the clicked time line cell
        draggable: true,
        resizable: false,
        resizableLeft: true,
        rows : { 
            '0' : {
            title : 'Понедельник',
            schedule:[
                {
                    start: '09:00',
                    end: '10:30',
                    text: 'Машинное обучение',
                    data: {
                    }
                },
                {
                    start: '9:30',
                    end: '11:00',
                    text: 'Управление инвестициями',
                    data: {
                    }
                }
            ]
        },
        '1' : {
            title : 'Вторник',
            schedule:[
                {
                    start: '08:00',
                    end: '09:30',
                    text: 'Лексикология',
                    data: {
                        class: 'rudn'
                    }
                }
            ]
        },
        '2' : {
            title : 'Среда',
            schedule:[
                {
                    start: '09:00',
                    end: '10:30',
                    text: 'Машинное обучение',
                    data: {
                    }
                }
            ]
        },
        '3' : {
            title : 'Четверг',
            schedule:[
                {
                    start: '09:00',
                    end: '10:30',
                    text: 'Машинное обучение',
                    data: {
                    }
                },
                {
                    start: '13:30',
                    end: '15:00',
                    text: 'Управление инвестициями',
                    data: {
                    }
                }
            ]
        },
        '4' : {
            title : 'Пятница',
            schedule:[
                {
                    start: '09:00',
                    end: '10:30',
                    text: 'Машинное обучение',
                    data: {
                    }
                },
                {
                    start: '11:30',
                    end: '13:00',
                    text: 'Управление инвестициями',
                    data: {
                    }
                }
            ]
        },
        '5' : {
            title : 'Суббота',
            schedule:[
                {
                    start: '9:30',
                    end: '11:00',
                    text: 'Управление инвестициями',
                    data: {
                    }
                }
            ]
        }
        
    },
        onChange: function(node, data){
            addLog('onChange', data);
        },
        onInitRow: function(node, data){
            addLog('onInitRow', data);
        },
        onClick: function(node, data){
            addLog('onClick', data);
        },
        onAppendRow: function(node, data){
            addLog('onAppendRow', data);
        },
        onAppendSchedule: function(node, data){
            addLog('onAppendSchedule', data);
            if(data.data.class){
                node.addClass(data.data.class);
            }
            if(data.data.image){
                var $img = $('<div class="photo"><img></div>');
                $img.find('img').attr('src', data.data.image);
                node.prepend($img);
                node.addClass('sc_bar_photo');
            }
        },
        // onScheduleClick: function(node, time, timeline){
        //     var start = time;
        //     var end = $(this).timeSchedule('formatTime', $(this).timeSchedule('calcStringTime', time) + 3600);
        //     $(this).timeSchedule('addSchedule', timeline, {
        //         start: start,
        //         end: end,
        //         text:'Insert Schedule',
        //         data:{
        //             class: 'sc_bar_insert'
        //         }
        //     });
        //     addLog('onScheduleClick', time + ' ' + timeline);
        // },
    });
    
    
    
    
});