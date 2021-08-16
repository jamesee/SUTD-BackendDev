select job, round(avg(salary)) as ave_salary from payroll group by job order by ave_salary desc limit 10;

select count(*) from payroll where email like '%.net';

//not done yet
select topic from Discussion where user1 = 'Alice' and user2='Bob'