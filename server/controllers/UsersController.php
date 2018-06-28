<?php
namespace app\controllers;

use yii\rest\ActiveController;

class UsersController extends ActiveController
{
    // указываем класс модели, который будет использоваться
    public $modelClass = 'app\models\Users';

    public function behaviors()
    {
        return
            \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
                'corsFilter' => [
                    'class' => \yii\filters\Cors::className(),
                ],
            ]);
    }
}
?>