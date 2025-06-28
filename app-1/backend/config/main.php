<?php

$params = array_merge(
    require __DIR__ . '/../../common/config/params.php',
    require __DIR__ . '/../../common/config/params-local.php',
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

$config = [
    'id'                  => 'app-backend',
    'basePath'            => dirname(__DIR__),
    'controllerNamespace' => 'backend\controllers',
    'bootstrap'           => ['log'],
   'modules' => [
    'v1' => [
        'class' => 'app\modules\v1\Module',
    ],
],

    'components' => [
        /* ---------- HTTP REQUEST ---------- */
        'request' => [
            'csrfParam'           => '_csrf-backend',
            'cookieValidationKey' => '<SUA-CHAVE-SECRETA-AQUI>',
            'parsers'             => [
                'application/json' => yii\web\JsonParser::class,
            ],
        ],

        /* ---------- HTTP RESPONSE (JSON por padrão) ---------- */
        'response' => [
            'format'   => yii\web\Response::FORMAT_JSON,
            'charset'  => 'UTF-8',
        ],

        /* ---------- AUTENTICAÇÃO ---------- */
        'user' => [
            'identityClass'   => common\models\User::class,
            'enableAutoLogin' => true,
            'identityCookie'  => [
                'name'     => '_identity-backend',
                'httpOnly' => true,
                'sameSite' => 'Lax',
            ],
        ],

        /* ---------- SESSÃO ---------- */
        'session' => [
            'name' => 'advanced-backend',
        ],

        /* ---------- LOG ---------- */
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets'    => [
                [
                    'class'  => yii\log\FileTarget::class,
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],

        /* ---------- ERRO PADRÃO ---------- */
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],

        /* ---------- URL MANAGER / ROTAS ---------- */
        'urlManager' => [
            'enablePrettyUrl'     => true,
            'showScriptName'      => false,
            'enableStrictParsing' => true,
            'rules' => [
                'GET v1/ping' => 'v1/default/ping',

                [
                    'class'      => yii\rest\UrlRule::class,
                    'controller' => ['v1/user'],
                    'pluralize'  => false,
                ],
            ],
        ],
    ],

    'params' => $params,
];

// Habilita debug e gii somente fora do ambiente de teste
if (!YII_ENV_TEST) {
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => yii\debug\Module::class,
        'allowedIPs' => ['127.0.0.1', '::1'], // pode adicionar seu IP aqui
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => yii\gii\Module::class,
        'allowedIPs' => ['127.0.0.1', '::1'], // pode adicionar seu IP aqui
    ];
}

return $config;
