const data = {
    pc: [
        {
            id: 1,
            user: 'Григориев Владимир Владимирович',
            type: 'PC',
            inventory: '01360078',
            ip: '192.168.100.226',
            networkName: 'GrigorieVV',
            ethernet: true,
            soft: '-',
            location: '404',
            responsible: 'Яцкевич Наталья Анатольевна',
            description: 'Подключается удаленно к Сугойдь-Зубович Екатерина Вадимовна',
            specifications: {
                ram: 8,
                cp: 'i3-4160',
                hdd: '1 ТБ',
                graphics: 'Intel HD Graphics 4400',
                widows: '10 (64)'
            }
        },
        {
            id: 2,
            user: 'Миронинко Валентина Николаевна',
            type: 'PC',
            inventory: '01360065',
            ip: '192.168.100.241',
            networkName: 'MironinkoVN',
            ethernet: true,
            soft: '-',
            location: 'библиотека',
            responsible: 'Совицкий Юрий Алексеевич',
            description: '-',
            specifications: {
                ram: 4,
                cp: 'AMD Athlon 64 X2 Dual Core Processor 5000+',
                hdd: '2TB + 160GB',
                graphics: 'ATI Radeon X1200 series',
                widows: '10 (64)'
            }
        },
        {
            id: 3,
            user: 'Людмила Манкевич Петровна',
            type: 'PC',
            inventory: '01360064',
            ip: '192.168.100.230',
            networkName: 'MankevichLP',
            ethernet: true,
            soft: '-',
            location: '402',
            responsible: '?',
            description: 'Небыло на месте. Принтер подключен к компьютеру проводом.',
            specifications: {
                ram: 8,
                cp: 'i3-4160',
                hdd: '1 TB',
                graphics: 'Intel HD Graphics 4400',
                widows: '10 (64)'
            }
        }
    ],
    monitor: [
        {
            id: 1,
            user: 'Людмила Манкевич Петровна',
            type: 'monitor',
            inventory: '01360064',
            location: '402',
            responsible: '?',
            description: 'Небыло на месте.',
            specifications: {
                manufacture: 'Philips',
                model: '223V5L'
            }
        },
        {
            id: 2,
            user: 'Миронинко Валентина Николаевна',
            type: 'monitor',
            inventory: '01360065',
            location: 'библиотека',
            responsible: 'Совицкий Юрий Алексеевич',
            description: 'Небыло на месте.',
            specifications: {
                manufacture: 'Philips',
                model: '223v5lsb2/10',
                ModelNo: '223V5L',
                serialNomber: 'ZVCA1429030108'
            }
        },
        {
            id: 3,
            user: 'Григориев Владимир Владимирович',
            type: 'monitor',
            inventory: '01360078',
            location: 'библиотека',
            responsible: 'Яцкевич Наталья Анатольевна',
            description: 'Небыло на месте.',
            specifications: {
                manufacture: 'Philips',
                ModelNo: '223V5L'
            }
        }
    ],
    mouse: [
        {
            id: 1,
            user: 'Григориев Владимир Владимирович',
            type: 'mouse',
            inventory: '01360078',
            location: '404',
            responsible: 'Яцкевич Наталья Анатольевна',
            description: '-',
            specifications: {
                manufacture: 'Logitech',
                model: 'B100'
            }
        },
        {
            id: 2,
            user: 'Миронинко Валентина Николаевна',
            type: 'mouse',
            inventory: '01381643',
            location: 'библиотека',
            responsible: 'Совицкий Юрий Алексеевич',
            description: '-',
            specifications: {
                manufacture: 'Logitech',
                model: 'B100',
                MN: 'M-40026',
                PN: '910-003656',
                SN: '1428HS0709HB'
            }
        },
        {
            id: 3,
            user: 'Людмила Манкевич Петровна',
            type: 'mouse',
            inventory: '01360064',
            location: '402',
            responsible: '?',
            description: '-',
            specifications: {
                manufacture: 'Logitech',
                model: 'B100'
            }
        },
    ],
    keyboard: [
        {
            id: 1,
            user: 'Григориев Владимир Владимирович',
            type: 'keyboard',
            inventory: '01360078',
            location: '404',
            responsible: 'Яцкевич Наталья Анатольевна',
            description: '-',
            specifications: {
                manufacture: 'Logitech',
                model: 'K100'
            }
        },
        {
            id: 2,
            user: 'Миронинко Валентина Николаевна',
            type: 'keyboard',
            inventory: '01381705',
            location: 'библиотека',
            responsible: 'Совицкий Юрий Алексеевич',
            description: '-',
            specifications: {
                manufacture: 'Genius',
                model: 'KB-06X2',
                SN: 'XE9801001640',
                MN: 'W2036'

            }
        },
        {
            id: 3,
            user: 'Людмила Манкевич Петровна',
            type: 'keyboard',
            inventory: '01360064',
            location: '402',
            responsible: '?',
            description: '-',
            specifications: {
                manufacture: 'Logitech',
                model: 'K100'
            }
        },
    ],
    person: [
        {
            id: 1,
            type: 'staff',
            fullName: 'Миронинко Валентина Николаевна',
            position: '-',
            HeadOfDepartment: false,
            photo: '-',
            location: '203',
            department: 'Научно просветительский отдел'
        },
        {
            id: 2,
            type: 'staff',
            fullName: 'Людмила Манкевич Петровна',
            position: '-',
            HeadOfDepartment: true,
            photo: '-',
            location: '401',
            department: 'Издательский полиграфический сектор'
        },
        {
            id: 3,
            type: 'staff',
            fullName: 'Григориев Владимир Владимирович',
            position: 'Научный сотрудник',
            HeadOfDepartment: false,
            photo: '-',
            location: '404',
            department: 'Отдел научно исследовательской работы'
        }
    ]
}

export default data;