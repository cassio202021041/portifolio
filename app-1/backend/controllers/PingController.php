<?php

namespace app\modules\v1\controllers;

use yii\rest\Controller;

class PingController extends Controller
{
    public function actionIndex()
    {
        return ['message' => 'pong'];
    }
}
