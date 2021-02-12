select
    p.codprod   AS "Cod",
    case
        when p.embalagem = 'UN' then p.fbs_descricao
        else p.fbs_descricao || ' ' || p.embalagem
    end         AS "Descrição",
    c.nome      AS "Comprador",
    f.fantasia  AS "Fornecedor",
    null        AS "Obs",
    null        AS "Preço 1",
    null        AS "Preço 2",
    null        AS "Normal",
    null        AS "Fixos",
    pr.pvenda   AS "Preço Atual",
    pr.ptabela  AS "Preço Futuro",
    nvl(
        e.qtestger - e.qtreserv -
        e.qtindeniz + e.qtpedida
    , 0)        AS "Qt.Est",
    null        AS "Pág.",
    null        AS "Linha"
from pcprodut p
    inner join pcest e      on p.codprod = e.codprod
    inner join pcfornec f   on p.codfornec = f.codfornec
    inner join pcempr c     on f.codcomprador = c.matricula
    inner join pctabpr pr   on p.codprod = pr.codprod and pr.numregiao = 1
where   p.dtexclusao is null
    and p.codepto in (1,2,10002,10003)
    and p.obs2 not in ('FL')
    and (
        p.codmarca not in (93)
        or p.codmarca is null
    )
    and p.revenda = 'S'
order by f.fantasia, p.fbs_descricao
;