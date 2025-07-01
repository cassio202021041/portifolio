<?php

namespace app\models;

/**
 * This is the ActiveQuery class for [[PortifolioCurriculo]].
 *
 * @see PortifolioCurriculo
 */
class PortifolioCurriculoQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return PortifolioCurriculo[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return PortifolioCurriculo|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
