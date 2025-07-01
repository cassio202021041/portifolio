<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "curriculo".
 *
 * @property int $id
 * @property string|null $objetivo
 * @property string|null $formacao
 * @property string|null $habilidades
 * @property string|null $experiencias_profissionais
 * @property string|null $perfil_profissional
 * @property string $created_at
 */
class PortifolioCurriculo extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'curriculo';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['objetivo', 'formacao', 'habilidades', 'experiencias_profissionais', 'perfil_profissional'], 'default', 'value' => null],
            [['objetivo', 'formacao', 'habilidades', 'experiencias_profissionais', 'perfil_profissional'], 'string'],
            [['created_at'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => Yii::t('app', 'ID'),
            'objetivo' => Yii::t('app', 'Objetivo'),
            'formacao' => Yii::t('app', 'Formacao'),
            'habilidades' => Yii::t('app', 'Habilidades'),
            'experiencias_profissionais' => Yii::t('app', 'Experiencias Profissionais'),
            'perfil_profissional' => Yii::t('app', 'Perfil Profissional'),
            'created_at' => Yii::t('app', 'Created At'),
        ];
    }

    /**
     * {@inheritdoc}
     * @return PortifolioCurriculoQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new PortifolioCurriculoQuery(get_called_class());
    }

}
