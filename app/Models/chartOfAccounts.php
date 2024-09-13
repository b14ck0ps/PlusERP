<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chartOfAccounts extends Model
{
    use HasFactory;

    protected $table = 'chart_of_accounts';
    protected $primaryKey = 'account_code';
    public $incrementing = false;

    protected $fillable = [
        'account_name',
        'account_code',
        'type'
    ];

    public function journalEntries()
    {
        return $this->hasMany(journalEntries::class, 'account_code', 'account_code');
    }
}
