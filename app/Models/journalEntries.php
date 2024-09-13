<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class journalEntries extends Model
{
    use HasFactory;

    protected $table = 'journal_entries';
    protected $primaryKey = 'entry';

    protected $fillable = [
        'account_code',
        'transaction_date',
        'debit',
        'credit',
        'description'
    ];

    public function chartOfAccounts()
    {
        return $this->belongsTo(chartOfAccounts::class, 'account_code', 'account_code');
    }
}
