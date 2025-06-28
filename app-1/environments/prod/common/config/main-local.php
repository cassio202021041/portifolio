<?php

return [
    'components' => [
          'db' => [
            'class'    => yii\db\Connection::class,
            'dsn'      => 'mysql:host=127.0.0.1;port=3306;dbname=db_portifolio',
            'username' => 'root',
            'password' => '',
            'charset'  => 'utf8mb4',
        ],
        'mailer' => [
            'class' => \yii\symfonymailer\Mailer::class,
            'viewPath' => '@common/mail',
        ],
    ],
];
