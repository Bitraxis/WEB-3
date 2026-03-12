(module
  ;; Memory layout for zero-terminated strings:
  ;; 0  -> ONLINE
  ;; 7  -> OFFLINE
  ;; 15 -> SIGNAL STABLE
  ;; 29 -> STATIC NOISE
  (memory (export "memory") 1)
  (data (i32.const 0) "ONLINE\00OFFLINE\00SIGNAL STABLE\00STATIC NOISE\00")

  (func $is_fifth_visit (param $visit i32) (result i32)
    (i32.eqz
      (i32.rem_u (local.get $visit) (i32.const 5))
    )
  )

  ;; Small xorshift PRNG for retro-looking signal values.
  (func $xorshift32 (param $value i32) (result i32)
    (local $x i32)
    (local.set $x (local.get $value))
    (local.set $x (i32.xor (local.get $x) (i32.shl (local.get $x) (i32.const 13))))
    (local.set $x (i32.xor (local.get $x) (i32.shr_u (local.get $x) (i32.const 17))))
    (local.set $x (i32.xor (local.get $x) (i32.shl (local.get $x) (i32.const 5))))
    (local.get $x)
  )

  (func (export "status_ptr") (param $visit i32) (result i32)
    (if (result i32)
      (call $is_fifth_visit (local.get $visit))
      (then (i32.const 7))
      (else (i32.const 0))
    )
  )

  (func (export "signal_strength") (param $visit i32) (param $seed i32) (result i32)
    (i32.rem_u
      (i32.add
        (call $xorshift32 (local.get $seed))
        (local.get $visit)
      )
      (i32.const 100)
    )
  )

  (func (export "mood_ptr") (param $signal i32) (result i32)
    (if (result i32)
      (i32.ge_u (local.get $signal) (i32.const 50))
      (then (i32.const 15))
      (else (i32.const 29))
    )
  )
)
