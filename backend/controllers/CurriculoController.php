<?php

namespace app\controllers;

use yii\web\Controller;
use yii\web\Response;
use yii\filters\Cors;
use app\models\PortifolioCurriculo;

class CurriculoController extends Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $behaviors['corsFilter'] = [
            'class' => Cors::class,
            'cors' => [
                'Origin' => ['http://localhost:4200'], // ou '*' durante o desenvolvimento
                'Access-Control-Request-Method' => ['GET', 'POST', 'OPTIONS'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Allow-Headers' => ['*'],
            ],
        ];

        return $behaviors;
    }

    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionListar()
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return PortifolioCurriculo::find()->all();
    }
}
