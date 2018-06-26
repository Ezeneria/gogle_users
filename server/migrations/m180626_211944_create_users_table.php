<?php

use yii\db\Migration;

/**
 * Handles the creation of table `users`.
 */
class m180626_211944_create_users_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('users', [
            'id' => $this->primaryKey(),
            'name' => $this->string(),
            'lat' => $this->integer(),
            'lng' => $this->integer(),
            'town' => $this->string(),
            'street' => $this->string(),
            'house' => $this->string(),
            'message'=> $this->string(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('users');
    }
}
